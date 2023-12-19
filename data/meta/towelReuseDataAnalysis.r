# This r-script analyzes the data on towel reuse reported in Scheibehenne, Jamil, & Wagenmakers 
# and it reproduces the Figure reported therein. To run, the script requires the raw data file 
# ("towelData.csv") and the BayesFactor package by Morey & Rouder.   


#The analysis requires the BayesFactor package in R
library("BayesFactor")

#load raw data from file
rawData=read.table("towelData.csv", header=T, sep=";",stringsAsFactors =F)
n=dim(rawData)[1]/4


#-----------------------------------
#add total (assuming a fixed effect)
   bigTable=array(rawData$Count, dim=c(2,2,n))
   total2x2=apply(bigTable, 2, rowSums)
   totalFrame=data.frame(Source=rep("Total",4), 
                         AuthorName=rep("Total",4), 
                         Experiment=rep(NA,4),
                         Year=rep(NA,4), 
                         Group=c("Control", "Social Norm", "Control", "Social Norm"),
                         Towel.Reuse=c("Yes", "Yes", "No", "No"),
                         Count=c(total2x2[1,1], total2x2[2,1], total2x2[1,2], total2x2[2,2]))
   
   rawData=rbind(rawData,totalFrame)

  
#Calculate BF and Posterior Odds Ratio 

   exList=unique(rawData$Source) #list with unique experiments
   
   FreqOR=chi2=p=BF=rep(NA, times=length(exList)) #frequentistic odds ratio, chi2 value, p-vlaue, and Bayes Factor
   names(FreqOR)=exList
   names(BF)=exList
   
   BayesOR=matrix(NA, nrow=length(exList), ncol=10000) #samples from posterior odds ratio distribution 
   rownames(BayesOR)=exList
   
   
   for (i in 1:length(exList)) {
      
      #extract 2x2 table 
         thisEx=rawData[rawData$Source==exList[i],]
         table2x2=cbind(yes=thisEx[1:2,"Count"],no=thisEx[3:4,"Count"] )
         rownames(table2x2)=c("control", "socialNorm")
      
      #calculate frequentist chi2
         chi2test=chisq.test(table2x2, correct=F) 
         chi2[i]=chi2test$statistic
         p[i]=chi2test$p.value
         
      #frequentist odds ratio
         odds=c(control   =table2x2["control"   , "yes"]/table2x2["control"   ,"no"],
                socialNorm=table2x2["socialNorm", "yes"]/table2x2["socialNorm","no"])
         FreqOR[i]=odds[2]/odds[1]
   
      #Bayesian posterior odds ratio 
         X=contingencyTableBF(table2x2, sampleType="indepMulti", fixedMargin="rows", priorConcentration = 1)
         
         # Sample from alternative model
         c1 = posterior(X, iterations = 10000)
         # Sample from null model
         c2 = posterior(1/X, iterations = 10000)
         
         data<-as.data.frame(c1,col.names=c("lambda11","lambda21","lambda12","lambda22"))
         
         BayesOR[i,]<-(data[,2]*data[,3])/(data[,1]*data[,4])
      
      #directed BF (social norm > control)
      bf1 <- exp(as.numeric(X@bayesFactor$bf))
      lbf1 <- as.numeric(X@bayesFactor$bf)
      
      post.result = BayesFactor::posterior(X, iterations = 10000)
      
      index <- grep(pattern="omega", x=colnames(post.result))
      theta <- as.data.frame(post.result[,index])
      prop.consistent <- mean(theta[,1] < theta[,2]) 
    
      BF[i] <- bf1 * prop.consistent / 0.5
    
   }


#Calculate log-odds and ci95 for the BayesOR 
   FreqLO=log(FreqOR)
   BayesLO=log(BayesOR)

   #calculate mean logOdds
   BayesLO.mean=apply(BayesLO,1,mean)
   
   ci95=apply(BayesLO, 1, quantile, p=c(.025,.975)) 


#----------
# Re-do the analysis sequentially by adding one study after the other (in the order they were published)
   
   BFseq=rep(NA, times=n)
   
   #start with first experiment
   acc2x2 = matrix(0, nrow=2, ncol=2)
   colnames(acc2x2)=c("yes", "no")
   rownames(acc2x2)=c("control", "socialNorm")
   
   
   for (i in 1:n) {
      
      #add studies consecutively
      acc2x2 = acc2x2+bigTable[,,i]
      
      #Bayesian posterior odds ratio 
      X=contingencyTableBF(acc2x2, sampleType="indepMulti", fixedMargin="rows", priorConcentration = 1)
      
      #directed BF (social norm > control)
      bf1 <- exp(as.numeric(X@bayesFactor$bf))
      post.result = BayesFactor::posterior(X, iterations = 10000)
      
      index <- grep(pattern="omega", x=colnames(post.result))
      theta <- as.data.frame(post.result[,index])
      prop.consistent <- mean(theta[,1] < theta[,2]) 
      BFseq[i] <- bf1 * prop.consistent / 0.5
      
   }

   
   
#-------------------
#Prepare data for plotting
   
   
   #format study names
   studyName=rep(NA, times=(n+1))
   studypos=1
   for(ss in 1:(n+1)){
      studyName[ss]=paste(rawData$AuthorName[studypos], ", Ex.",rawData$Experiment[studypos], sep="")
      studypos=studypos+4
   }
   
   #re-arrange raw data in the format: control.reuse, control.throw, ex.reuse, ex.throw
   nTable=matrix(NA, nrow=(n+1),ncol=4 )
   colnames(nTable)=c("control.reuse", "control.throw", "ex.reuse", "ex.throw")
   rownames(nTable)=exList
   
   for (i in 1:length(exList)) {
      thisEx=rawData[rawData$Source==exList[i],]
      nTable[i,]=c(thisEx[1,"Count"],thisEx[3,"Count"],thisEx[2,"Count"], thisEx[4,"Count"])
   }
   
   #squeeze data into data.frame
   plotFrame=data.frame(studyName,BayesLO.mean  ,BF, ci95.low=ci95[1,], ci95.high=ci95[2,])
   plotFrame=cbind(plotFrame, nTable)
   
   #save(plotFrame, file="plotData.RData") #optionally, for later use
   


#----------
#Plot data
   windows(8,7)
   layout(matrix(c(1:4,rep(5,4)),byrow=T, nrow=2), width=c(.18,.52,.1,.2), height=c(.55,.45))
   
   #--------------
   #Plot first panel
   #prepare layout
   par(mar=c(0.1,0,2,0.1))
   ncol=4
   n=dim(plotFrame)[1] #number of studies in the file

   ylim=c(-1,8)
   xlim=c(0,1)
   
   ypos=seq(from=n-1.3, length.out=n-1, by=-.9)
   headY=7.6

   #Plot Study names (Source)
   plot(NULL, xlim=xlim, ylim=ylim, xlab="", ylab="", xaxt="n", yaxt="n", bty="n")
   text(expression(bold("Source")), x=0, y=headY, adj=c(0,0), cex=1.5)
   
   text(plotFrame$studyName[1:(n-1)], y=ypos, x=0, adj=c(0,.5), cex=1.3, xpd=NA)
   text(expression(bold("Total")), y=0.2, x=0, adj=c(0,.5), cex=1.3)


   #Plot LogOdds
   ci95=rbind(plotFrame$ci95.low, plotFrame$ci95.high)

   xlimLO=c(-3,2)#range(ci95)*1.2
   plot(NULL, xlim=xlimLO, ylim=ylim, xlab="", ylab="", xaxt="n", yaxt="n", bty="n")
   text(expression(bold("Posterior Log Odds Ratio")), x=mean(xlimLO), y=headY, adj=c(0.5,0), cex=1.5)

   lines(x=c(0,0), y=c(-.5,7.3), lty="dashed")
   axis(1, line=-2.5,cex.axis=1.3 )
   mtext(side=1, text="Log Odds Ratio", line=.2, cex=1)

   for(rr in (n-1):1){
      arrows(x0=ci95[1,rr], x1=ci95[2,rr], y0=ypos[rr], y1=ypos[rr], length=.04, code=3, angle=90, lwd=2)
      points(x=plotFrame$BayesLO.mean[rr], y=ypos[rr], pch=21, cex=2.5, bg="grey")
   }
   
   arrows(x0=ci95[1,n], x1=ci95[2,n], y0=0.2, y1=0.2, length=.04, code=3, angle=90,lwd=2)
   points(x=plotFrame$BayesLO.mean[n], y=0.2, pch=23, cex=2.5, bg="black")


   #Plot BF
   plot(NULL, xlim=xlim, ylim=ylim, xlab="", ylab="", xaxt="n", yaxt="n", bty="n")
   text(expression(bold("Bayes")), x=0.5, y=headY+.5, adj=c(0.5,0), cex=1.5, xpd=NA)
   text(expression(bold("Factor")), x=0.5, y=headY, adj=c(0.5,0), cex=1.5)

   textBF=round(plotFrame$BF,2)
   text(textBF[1:(n-1)], y=ypos, x=0.7, adj=c(1,.5), cex=1.5)
   text(textBF[n], y=0.2, x=0.7, adj=c(1,.5), cex=1.5, font=2)


   #Plot Data
   plot(NULL, xlim=xlim, ylim=ylim, xlab="", ylab="", xaxt="n", yaxt="n", bty="n")
   
   #x positions
   x=c(2/8, 4/8, 6/8,8/8)
   text(expression(bold("Data")), x=0.5, y=8.9, adj=c(0.5,.5), cex=1.5, xpd=NA)
   text(expression(bold("control")), x=1/4, y=headY+.7, adj=c(.5,.5), xpd=NA)
   text(expression(bold("social norm")), x=3/4, y=headY+.7, adj=c(.5,.5), xpd=NA)
   text(expression(bold("reuse")),  x=c(1/8, 5/8), y=headY, adj=c(.5,0))
   text(expression(bold("throw")),  x=c(3/8,7/8), y=headY, adj=c(.5,0))
   lineY=7.95
   lines(x=c(1/8-1/16,3/8+1/16), y=c(lineY,lineY))
   lines(x=c(5/8-1/16,7/8+1/16), y=c(lineY, lineY))

   nTable=cbind(plotFrame$control.reuse, plotFrame$control.throw, plotFrame$ex.reuse, plotFrame$ex.throw)
   for (rr in n:1){
      text(nTable[rr,], y=ypos[rr], x=x-1/16, adj=c(1,.5), cex=1.1)
   }
   text(nTable[n,], y=0.2, x=x-1/16, adj=c(1,.5), cex=1.1, font=2)
        

   #add horizontal lines
   abline(h=c(0.7,7.3), xpd=NA)

   #---------      
   #Plot sequential BF

      par(mar = c(4.5, 7, 5, 11)+.1)  #bottom, left, top, right
      
      maxY=c(0,log(1000)) #lower and upper value of y axis (on log scale)
      n=length(BFseq)
      
      plot(1:n,log(BFseq),ylim=maxY,ylab="", main="", yaxt="n",xaxt="n", xlab="", bty="n")
      
      axis(side=1,cex.axis=1.3)
      mtext("Number of included studies (ordered by publication date)",side=1, cex=1, line=3)
      
      bfCutoffs=c(100,30,10,3,1)
      criticalP=log(bfCutoffs)
      for (idx in 1:length(criticalP)) {
         abline(h=criticalP[idx],col='darkgrey',lwd=1,lty=2)
      }
      
      #re-draw points
      points(1:n, log(BFseq), type="b", cex=2.5, pch=21, bg="grey")
      
      axis(side=4, at=c(0,log(1000)), lwd.ticks=0, labels=F)
      axis(side=4, at=criticalP,tick=T,las=2,cex.axis=1, labels=F)
      axis(side=4, at=criticalP[2:5]+.602, tick=F, cex.axis=1.3, labels=c("Very strong", "Strong","Moderate", "Anecdotal"),las=1)
      axis(side=4, at=(criticalP[1]+maxY[2])/2,tick=F, cex.axis=1.3, labels=c("Extreme"),las=1)
      
      
      axis(side=2, at=c(criticalP,log(1000)),tick=T,las=2,cex.axis=1.3,labels=c(bfCutoffs,1000), cex=1.3)
      mtext("Bayes Factor" , side=2, line=5, las=0, cex=1)
      grid::grid.text("Evidence", x=.97, y=0.21, rot=270, gp=grid::gpar(cex=1))

   

   #Save plot to file (optional)
    #savePlot("Figure1.new.eps", type="eps")
    #savePlot("Figure1.new.pdf", type="pdf")
    #savePlot("Figure1.new.jpeg", type="jpeg")

   
   
#=======================================================================
# Supplementary Online Material: 
# Calculate a Frequentist "fixed effects" Meta-Analysis (for comparison)
      
# Note: We would like to thank Quentin Gronau for his help with this analysis   
  
      
 experiments.tmp <- unique(rawData$Source)
 
 # remove total
 experiments <- experiments.tmp[-length(experiments.tmp)]
 
 # preallocate vectors for calculating "by-hand" to check results from metafor package
 logOR <- numeric(length(experiments))
 SElogOR <- numeric(length(experiments))
 

 # preallocate vectors with counts
 ai <- numeric(length(experiments))
 bi <- numeric(length(experiments))
 ci <- numeric(length(experiments))
 di <- numeric(length(experiments))
 
 # obtain counts and by-hand calculated logOR and standard error
 for (i in seq_along(experiments)) {
   
   d.tmp <- rawData[rawData$Source == experiments[i], ]
   
   ai[i] <- d.tmp[2, "Count"]
   bi[i] <- d.tmp[1, "Count"]
   ci[i] <- d.tmp[4, "Count"]
   di[i] <- d.tmp[3, "Count"]
   
   or <- (d.tmp[2, "Count"] / d.tmp[1, "Count"]) / (d.tmp[4, "Count"] / d.tmp[3, "Count"])
   logOR[i] <- log(or)
   SElogOR[i] <- sqrt(sum(1/d.tmp[ , "Count"]))
   
   
 }

 
 # fit fixed effects meta-analysis
 library(metafor)
 r <- rma(measure = "OR", 
          ai = ai, 
          bi = bi, 
          ci = ci, 
          di = di, 
          method = "FE")
 
 # compare metafor logOR and by-hand calculated logOR
 all.equal(as.numeric(r$yi), logOR)
 
 # compare metafor logOR variance and by-hand calculated logOR variance
 all.equal(r$vi, SElogOR^2)
 
 # compute 95% confidence intervals
 crit <- qnorm(c(0.025, 0.975))
 ci95 <- rbind(r$yi + crit[1] * sqrt(r$vi),
               r$yi + crit[2] * sqrt(r$vi))
 ci95 <- cbind(ci95, c(r$b + crit[1] * r$se,
                       r$b + crit[2] * r$se))
 
 ######################################################################
 ##                           plot                                   ##
 ######################################################################
 
 
 
 studyNames <- paste(rawData$AuthorName[seq(1, 25, 4)], ", Ex.", rawData$Experiment[seq(1, 25, 4)], sep = "")
 
 ncol <- 2
 n <- length(unique(rawData$Source)) 
 
 windows(10, 6)
 
 nf <- layout(matrix(1:ncol, nrow = 1,), width = c(.25, .52))
 par(mar = c(0.2, 1, 1, 1))
 
 ylim <- c(-2, 8)
 xlim <- c(0, 1)
 
 
 # Plot Study names (Source)
 plot(NULL, xlim = xlim, ylim = ylim, xlab = "", ylab = "", xaxt = "n", yaxt = "n", bty = "n")
 text(expression(bold("Source")), x = 0, y = 7.8, adj = c(0, 0), cex = 1.5)
 
 text(studyNames, y = (n-1):1, x = 0, adj = c(0,.5), cex = 1.3, xpd = NA)
 text(expression(bold("Meta-Analytic:")), y = 0, x = 0, adj = c(0, .5), cex = 1.3)
 
 
 # Plot LogOdds
 
 xlimLO <- c(-3, 2)
 plot(NULL, xlim = xlimLO, ylim = ylim, xlab = "", ylab = "", xaxt = "n", yaxt = "n", bty = "n")
 
 lines(c(0, 0), c(-.5, 7.4), lty = "dashed")
 axis(1, line = -4.1, cex.axis = 1.3)
 mtext(side = 1, text = "Log Odds Ratio", line = -1.2, cex = 1.5)
 
 for(i in 1:(n-1)){
   
   arrows(x0 = ci95[1,i], x1 = ci95[2,i], y0 = n-i, y1 = n-i, length = .04, code = 3, angle = 90, lwd = 2)
   points(x = r$yi[i], y = n-i, pch = 21, cex = 2.5, bg = "grey")
   
 }
 
 arrows(x0 = ci95[1,n], x1 = ci95[2,n], y0 = 0, y1 = 0, length = .04, code = 3, angle = 90, lwd = 2)
 points(x = r$b, y = 0, pch = 23, cex = 2.5, bg = "black")
 
 
 # Save plot to file (optional)
   # savePlot("FixedEffectsMetaAnalysisPlot.pdf", type = "pdf")
 
 # Save image (optional)
   # save.image("towelAnalysis.RData")
 
  
 
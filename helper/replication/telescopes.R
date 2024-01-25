# https://osf.io/adweh/files/osfstorage
#R Code behind Figures 1 & 2 in "Small Telescopes"
#Written by Uri Simonsohn (uws@wharton.upenn.edu)
#Last update: 2014 12 16
##################################################################

# Overview
#  This program creates two function to plot confidence interval plots for 3 studies at a time
#  It then feeds the results from the studies of interest in Figures 1 & 2 to generate them.
##################################################################

# Figure 2s.png

library(pwr)     #Library with power functions
# setwd("C:/uri/research/Replication/aaa Post/")  #Set directory where figures will be saved

#This function plots 90&95% confidence intervals for 3 studies, original and two replications
  repCI=function(d,h90,h95,l90,l95,d33,StudyLabels)
      #############################################################################
      #Syntax:
      #  Each of inputes to the function are vectors with three values each:
      #     d: point estimates for effect size of original and two replications
      #     h90/h95:  high bounds for 90/95% confidence intervals
      #     l90/l95:  low bounds for 90/95% confidence intervals
      #     StudyLabels: three string values to put under each confidence interval
      #   d33: scalar with d33 effect size for sample size of original study
      #############################################################################
      {
     #Asssume 3 studies total, position them at 1,3,5
      x=c(1,3,5)
     #Margins for graph to allow y-label with two lines of text
      par(mar=c(4.1,6.1,.5,2.1))
    #Draw the point estimates
      plot(x,d, xlim=c(0,7),ylim=c(min(l95)-.2,max(h95)+.2),col='black',pch=c(15,16,16),cex=c(1.5,.75,.75),xlab="",xaxt="n",ylab="")
    #Label y-axis
      mtext("Effect Size",side=2,line=4.2,cex=1.5)
      mtext("(Cohen's d)",side=2,line=3,cex=1.1)
    #Label x-axis
      axis(side=1,at=x,labels=StudyLabels,line=1.25,tck=0,lwd=0)
    #Draw the CI lines
      for (i in 1:3)
      {
      #90% CI
        lines(c(x[i],x[i]),c(h90[i],l90[i]),lwd=2)
      #95-90%
        lines(c(x[i],x[i]),c(h95[i],h90[i]),lty=3,col="black",lwd=2)
        lines(c(x[i],x[i]),c(l95[i],l90[i]),lty=3,col="black",lwd=2)
      }
    
    #Add line at 0
        abline(h=0,col=153)  
    #Add line at d33%
      lines(c(0,7),c(d33,d33),col=51,lty=2)
    #Text near the 33% line
      text(x=6.5,y=d33+.05,"Small Effect",col=51)
      text(x=6.5,y=d33-.05,"(d33%)",col=51)
    #Add CI legend
      legend(x=4.5,max(h95)+.2,legend=c("90% Confidence Interval","95% Confidence Interval"),cex=.85,lty=c(1,3),col=c("black","black"),lwd=2,bty="n")
    }


########################################################################
#Function that computes confidence interval for given t and n
  #First a function that allows finding the corresponding NCP
      pgap = function(ncp_est, t, n, p) pt(t,df=2*n-2,ncp=ncp_est)-p
  #We now apply it for each fo the percentiles needed
    ci=function(t,n)
    {
      #95% CI
        h95=(uniroot(pgap, c(-34, 34), p=.025,t = t, n = n)$root)/sqrt(n/2)
        l95=(uniroot(pgap, c(-34, 34), p=.975, t = t, n = n)$root)/sqrt(n/2)
      #90% CI
        h90=(uniroot(pgap, c(-34, 34), p=.05, t = t, n = n)$root)/sqrt(n/2)
        l90=(uniroot(pgap, c(-34, 34), p=.95, t = t, n = n)$root)/sqrt(n/2)
      #estimate
        d=2*t/sqrt(2*n)
      #return results
        return(c(h95,h90,d,l90,l95))
   }
  
  
########################################################################

# #FIGURE 1 - Enter data from the studies
# #Compute ds and confidence intervals based on reported test statistic
#       r1=ci(t=2.064,n=30)    #d and confidence intervals for Original
#       r2=ci(t=.283, n=47/2)  #d and confidence intervals for Gamez et al
#       r3=ci(t=-.092,n=335/2) #d and confidence intervals for Siev 
# 
#           #Note: Zhong& Liljenquist report F=4.26-->t=2.064, (SDs in paper erroneusly reported, so I used T based
#           #on SQRT(F), rather than computing the t-test off reprted SDs, see supplement
# 
# #Convert the vectors of results into the vectors being fed on the plotting function
#       h95=c(r1[1],r2[1],r3[1])
#       h90=c(r1[2],r2[2],r3[2])
#       d=c(r1[3],r2[3],r3[3])
#       l90=c(r1[4],r2[4],r3[4])
#       l95=c(r1[5],r2[5],r3[5])
# #compute d33
#       d33=pwr.t.test(n=30,power=1/3)$d
# 
# #Labels for the studies  
#     StudyLabels=c("Original\nZhong & Liljenquist (2006)\nN=60","Replication 1\nG?mez et al (2011)\nN=47","Replication 2\nSiev (2012)\nN=335")
# 
# #plot it
#     repCI(d=d,h90=h90,h95=h95,l90=l90,l95=l95,d33=d33,StudyLabels=StudyLabels)
# #plot it
#     
#   png("Figure 1 - Final.png",width=2800,height=1600,res=300)
#   repCI(d=d,h90=h90,h95=h95,l90=l90,l95=l95,d33=d33,StudyLabels=StudyLabels)
#   dev.off()
#   

    
    
########################################################################
    
#FIGURE 2
    #Get the parameters
    #1) SCHWARZ & CLORE:
        #Compute ds and confidence intervals based on reported test statistic
        r4=ci(t=2.673,n=14)    #d and confidence intervals for Schwarz & Clore
    
    #2) Feddersen (see supplement for calculations)
        se.fed=.009573  
        d.fed=.0202    
        h95.fed=d.fed+1.96*se.fed
        h90.fed=d.fed+1.64*se.fed
        l90.fed=d.fed-1.64*se.fed
        l95.fed=d.fed-1.96*se.fed
    
    #3) Lucas (see supplement for calculations)
        d.lucas=.002/.63
        se.lucas=.003/.63
        
        h95.lucas=d.lucas+1.96*se.lucas
        h90.lucas=d.lucas+1.64*se.lucas
        l90.lucas=d.lucas-1.64*se.lucas
        l95.lucas=d.lucas-1.96*se.lucas
    
  ########################################################
  #Now get these into the syntax for the graph maker      
        h95=c(r4[1],h95.fed, h95.lucas)
        h90=c(r4[2],h90.fed, h90.lucas)
        d=c(r4[3],d.fed, d.lucas)
        l90=c(r4[4],l90.fed, l90.lucas)
        l95=c(r4[5],l95.fed, l95.lucas)
    
  ###########################################
#compute d33
  d33=pwr.t.test(n=14,power=1/3)$d

        
    #Labels for the studies  
    StudyLabels=c("Original\nSchwarz & Clore (1983)\nN=28","Replication 1\nFeddersen et al (2013)\nN~97,000","Replication 2\nLucas & Lawless (2013)\nN~1 Million")
    
    #plot it
      # png("Figure 2 final.png",width=2800,height=1600,res=300)
      # repCI(d=d,h90=h90,h95=h95,l90=l90,l95=l95,d33=d33,StudyLabels=StudyLabels)
      # dev.off()

        
        
  
  
  
  
  
  
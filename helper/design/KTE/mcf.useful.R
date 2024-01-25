# library(grid)
# library(ggplot2)
# library(bootstrap)
# library(lme4)
# library(stringr)
# library(plotrix)
# library(reshape2)
# library(plyr)
# library(car)

## add some style elements for ggplot2
theme_set(theme_bw())

## standard error of the mean
sem <- function (x) {
  sd(x) / sqrt(length(x))
}

na.mean <- function(x) {mean(x,na.rm=T)}

na.sum <- function(x) {sum(x,na.rm=T)}

to.n <- function(x) {
  as.numeric(as.character(x))
}

## number of unique subs
n.unique <- function (x) {
  length(unique(x))
}

## for bootstrapping 95% confidence intervals
theta <- function(x,xdata,na.rm=T) {mean(xdata[x],na.rm=na.rm)}
ci.low <- function(x,na.rm=T) {
  mean(x,na.rm=na.rm) - quantile(bootstrap(1:length(x),1000,theta,x,na.rm=na.rm)$thetastar,.025,na.rm=na.rm)}
ci.high <- function(x,na.rm=T) {
  quantile(bootstrap(1:length(x),1000,theta,x,na.rm=na.rm)$thetastar,.975,na.rm=na.rm) - mean(x,na.rm=na.rm)}

## for basic plots, add linear models with correlations
lm.txt <- function (p1,p2,x=7.5,yoff=.05,lt=2,c="black",data=data)
{
  l <- lm(p2 ~ p1)
  regLine(l,lty=lt,col=c)
  cl <- coef(l)
  text(x,cl[1] + cl[2] * x + yoff,
       paste("r = ",sprintf("%2.2f",sqrt(summary(l)$r.squared)),
            getstars(anova(l)$"Pr(>F)"[1]),sep=""),
       xpd="n")
}

getstars <- function(x) {
  if (x > .1) {return("")}
  if (x < .001) {return("***")}
  if (x < .01) {return("**")}
  if (x < .05) {return("*")}
}

# Multiple plot function
#
# ggplot objects can be passed in ..., or to plotlist (as a list of ggplot objects)
# - cols:   Number of columns in layout
# - layout: A matrix specifying the layout. If present, 'cols' is ignored.
#
# If the layout is something like matrix(c(1,2,3,3), nrow=2, byrow=TRUE),
# then plot 1 will go in the upper left, 2 will go in the upper right, and
# 3 will go all the way across the bottom.
#
multiplot <- function(..., plotlist=NULL, file, cols=1, layout=NULL) {
  require(grid)
  
  # Make a list from the ... arguments and plotlist
  plots <- c(list(...), plotlist)
  
  numPlots = length(plots)
  
  # If layout is NULL, then use 'cols' to determine layout
  if (is.null(layout)) {
    # Make the panel
    # ncol: Number of columns of plots
    # nrow: Number of rows needed, calculated from # of cols
    layout <- matrix(seq(1, cols * ceiling(numPlots/cols)),
                     ncol = cols, nrow = ceiling(numPlots/cols))
  }
  
  if (numPlots==1) {
    print(plots[[1]])
    
  } else {
    # Set up the page
    grid.newpage()
    pushViewport(viewport(layout = grid.layout(nrow(layout), ncol(layout))))
    
    # Make each plot, in the correct location
    for (i in 1:numPlots) {
      # Get the i,j matrix positions of the regions that contain this subplot
      matchidx <- as.data.frame(which(layout == i, arr.ind = TRUE))
      
      print(plots[[i]], vp = viewport(layout.pos.row = matchidx$row,
                                      layout.pos.col = matchidx$col))
    }
  }
}
library(dplyr)
library(metafor)

# TO-D0
## VOTE COUNTING EST
## FE
## RE
## FP
## DP

# Effect size calculation for Fuegen 2014 ------------------------------------
m1 = 4.50
sd1 = 1.49
m2 = 4.03
sd2 = 1.66

glass.d = (m1 - m2) / sd2

cohen.d = (m1 - m2) / sqrt((1.49^2 + 1.66^2) / 2) 

rm(list = ls())

# Open data ------------------------------------
DF <- read.csv("Contact_quant_outcomes.csv")

# fixed effect meta-analysis
tmp <- rma.uni(yi = d,
        vi =  var_d,
        data = DF)
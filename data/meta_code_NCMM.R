library(dplyr)
library(metafor)

# TO-D0

# Effect size calculation for Fuegen 2014 ------------------------------------
m1 = 4.50
sd1 = 1.49
m2 = 4.03
sd2 = 1.66

glass.d = (m1 - m2) / sd2

cohen.d = (m1 - m2) / sqrt((1.49^2 + 1.66^2) / 2) 

rm(list = ls())

# Open subset of data ------------------------------------
DF <- read.csv("Contact_quant_outcomes.csv")[1:3, ]

# fixed effect meta-analysis -------------------------------
sum(DF$d * (1 / DF$var_d)) / 
  sum(1 / DF$var_d)

rma(yi = d,
    vi = var_d,
    data = DF,
    method = "FE")

rma(yi = d,
    vi = var_d,
    data = DF,
    method = "REML")
  


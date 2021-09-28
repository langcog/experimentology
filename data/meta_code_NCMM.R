library(dplyr)
library(metafor)

# TO-D0

--------------------------------------------------------------------------------
# Vote count studies that made it into the main meta-analysis
--------------------------------------------------------------------------------
DF <- read.csv("/data/Contact_quant_outcomes.csv")


# remove supplemental studies (see Paluck et al. Supplement Section 1)
DF <- DF[1:27, ]

# determine whether d estimate was significant
DF <- DF %>% 
  
  # calculate lower and upper bounds
  mutate(lb = d - (1.96 * sqrt(var_d)),
         ub = d + (1.96 * sqrt(var_d))) %>% 
  
  # determine significance
  mutate(sig = if_else(
    condition = lb > 0,
    true = 1,
    false = 0))

# significane table
sig.table <- table(DF$sig)


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
  


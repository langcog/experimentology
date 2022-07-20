library(Hmisc)
library(tidyverse)
library(glue)
library(here)
library(knitr)
library(shiny)
library(metafor)
library(ggrepel) # viz
library(GGally) # viz
library(BayesFactor) # inference
library(papaja)
library(lme4)
library(boot) # for inv.logit
library(kableExtra)

opts_chunk$set(
  message = FALSE,
  warning = FALSE,
  error = FALSE,
  comment = "#>",
  collapse = TRUE,
  cache = TRUE,
  echo = FALSE,
  cache.lazy = FALSE,
  dev = "png",
  dpi = 300,
  out.width = "\\linewidth"
)
kable <- function(...) knitr::kable(..., booktabs = TRUE, linesep = "")

set.seed(42)

.font <- "Source Sans Pro"
if (!(.font %in% sysfonts::font_families()))
  sysfonts::font_add_google(.font, .font)
showtext::showtext_auto()

theme_set(theme_bw(base_size = 14, base_family = .font))
theme_update(panel.grid = ggplot2::element_blank(),
             strip.background = ggplot2::element_blank(),
             legend.key = ggplot2::element_blank(),
             panel.border = ggplot2::element_blank(),
             axis.line = ggplot2::element_line(),
             strip.text = ggplot2::element_text(face = "bold"))
.grey <- "grey70"
.refline <- "dotted"
.coef_line <- element_line(colour = .grey, size = 0.1)

.pal <- ggthemes::ptol_pal
.scale_colour_discrete <- ggthemes::scale_colour_ptol
.scale_color_discrete <- .scale_colour_discrete
.scale_fill_discrete <- ggthemes::scale_fill_ptol

.scale_colour_continuous <- viridis::scale_colour_viridis
.scale_color_continuous <- .scale_colour_continuous
.scale_fill_continuous <- viridis::scale_fill_viridis

.scale_colour_numerous <- scale_colour_discrete
.scale_color_numerous <- .scale_colour_numerous
.scale_fill_numerous <- scale_fill_discrete

# from https://bookdown.org/yihui/rmarkdown-cookbook/font-color.html
colorize <- function(x, color) {
  if (knitr::is_latex_output()) {
    sprintf("\\textcolor{%s}{%s}", color, x)
  } else if (knitr::is_html_output()) {
    sprintf("<span style='color: %s;'>%s</span>", color,
            x)
  } else x
}

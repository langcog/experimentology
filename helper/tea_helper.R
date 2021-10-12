make_tea_data <- function(n_total = 48, sigma = 1.25, delta = 1) {
  
  tibble(condition = c(rep("milk first", n_total/2),
                       rep("tea first", n_total/2)),
         rating = c(round(rnorm(n_total/2, mean = 3.5 + delta, sd = sigma)), 
                    round(rnorm(n_total/2, mean = 3.5, sd = sigma))) ) %>%
    mutate(rating = ifelse(rating > 10, 10, rating), #truncate
           rating = ifelse(rating < 1, 1, rating))
}

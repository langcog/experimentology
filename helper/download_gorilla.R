# from https://www.rostrum.blog/posts/2021-10-05-gorilla

download.file(
  paste0(
    "https://classroomclipart.com/images/gallery/",
    "Clipart/Black_and_White_Clipart/Animals/",
    "gorilla-waving-cartoon-black-white-outline-clipart-914.jpg" 
  ),
  tempfile(fileext = ".jpg")
)

img <- 
  list.files(tempdir(), pattern = ".jpg$", full.names = TRUE) |>
  magick::image_read()

go <- img |>
  magick::image_quantize(2) |>  # colour reduction
  magick::image_raster() |>     # as x-y data
  as.data.frame()

head(go)

unique(go$col)

go$y     <- rev(go$y)
go       <- go[go$col != "#fefefeff", ]
go$bmi   <- go$y / max(go$y) * 17 + 15
go$steps <- 15000 - go$x * 15000 / max(go$x)

go$logo <- ifelse(go$bmi < 16 & go$steps < 5500, TRUE, FALSE)
go      <- go[!go$logo, ]

go_smp       <- go[sample(nrow(go), 1768), ]
go_smp$rnorm <- rnorm(nrow(go_smp), mean = 0, sd = 10)
go_smp$index <- go_smp$steps * (1 + go_smp$rnorm)
go_smp$group <- 
  ifelse(go_smp$index < median(go_smp$steps), "F", "M") |>
  as.factor()

saveRDS(go_smp, "data/viz/gorillas.rds")

# par(mfrow = c(1, 2))
# 
# with(
#   go_smp[go_smp$group == "F", ],
#   plot(
#     steps, bmi,
#     xlim = c(0, 15000),
#     pch = 16, cex = 0.5, col = "blue",
#     xlab = "Steps", ylab = "BMI", 
#   )
# )
# 
# with(
#   go_smp[go_smp$group == "M", ],
#   plot(
#     steps, bmi, 
#     xlim = c(0, 15000),
#     pch = 16, cex = 0.5, col = "red",
#     xlab = "Steps", ylab = "BMI"
#   )
# )

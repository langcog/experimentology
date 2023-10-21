# from https://osf.io/wph5v
driving <- readxl::read_excel("data/viz/DrivingdataAll (1).xls")

driving_diffs <- driving |>
  select(before = `Odom Reading 1 (Previous)`,
         after = `Odom Reading 1 (Update)`) |>
  mutate(miles = after - before)

saveRDS(driving_diffs, "data/viz/driving_diffs.rds")

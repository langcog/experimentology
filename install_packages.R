# pass any non-null command line argument to disable installation

args = commandArgs(trailingOnly=TRUE)
installMode = TRUE
if (length(args) > 0){
	installMode = FALSE
}
source("packages.R")

missing_packages = c()

for (package in packages) {
	if (!package %in% installed.packages()) {
		missing_packages = c(missing_packages, package)
		if (installMode) install.packages(package, dependencies=TRUE, repos="http://cran.rstudio.com/")
	}}

# this needs to be installed from github
devtools::install_github("crsh/papaja")

if (length(c) > 0) {
	print("there were missing packages")
	print(missing_packages)
} else {
	print("all packages installed")
}
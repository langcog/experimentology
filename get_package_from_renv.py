import json

if __name__ == "__main__":
    with open("renv.lock") as f:
        data = json.load(f)

    extra_packages = ['readr', 'rmarkdown', 'codetools', 'dplyr',
                      'curl']
    for package in extra_packages:
        data["Packages"][package] = {}

    package_list = [f'"{package}"' for package in data["Packages"].keys()]
    package_str = " ,".join(package_list)
    with open("packages.R", "w") as f:
        f.write(f"packages <- c({package_str})\n\n")

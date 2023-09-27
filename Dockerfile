FROM r-base:4.2.3

# install necessary system libraries
RUN apt-get update && apt-get -y install cmake \
    libfreetype-dev \
    libfontconfig1-dev \
    xclip \
    git \
    unzip \
    libcurl4-openssl-dev \
    libxml2-dev \
    libmagick++-dev \
    libpq-dev \
    libssl-dev \
    libmariadb-dev \
    libharfbuzz-dev \
    libfribidi-dev

# install all necessary R packages
RUN apt-get update && apt-get -y install 
COPY install_packages.R /install_packages.R
COPY packages.R /packages.R
RUN Rscript install_packages.R

# install latest dev version of quarto
RUN cd /opt && git clone https://github.com/quarto-dev/quarto-cli
RUN cd /opt/quarto-cli && ./configure.sh
ENV PATH="${PATH}:/opt/quarto-cli/package/dist/bin"

RUN mkdir /experimentology
WORKDIR /experimentology

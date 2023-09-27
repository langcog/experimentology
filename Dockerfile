FROM r-base:4.2.3

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
    libmariadb-dev



RUN cd /opt && git clone https://github.com/quarto-dev/quarto-cli
RUN cd /opt/quarto-cli && ./configure.sh
ENV PATH="${PATH}:/opt/quarto-cli/package/dist/bin"

RUN apt-get update && apt-get -y install 
COPY install_packages.R /install_packages.R
RUN Rscript install_packages.R

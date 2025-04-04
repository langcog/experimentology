#!/bin/bash

# for f in *_files/*pdf/*png images/*/*png; do out=submit/${f/.png/.jpg}; dir=$(dirname $out); echo $f; mkdir -p $dir; magick $f -colorspace cmyk -quality 100 $out; done
# for f in *_files/*pdf/*png images/*/*png; do out=submit/${f/.png/.jpg}; dir=$(dirname $out); echo $f; mkdir -p $dir; magick $f -profile "../USWebCoatedSWOP.icc" -quality 100 $out; done

cp Experimentology_fixed.tex submit/Experimentology_fixed.tex

# cd submit/
sed s/png/jpg/g Experimentology_fixed.tex > Experimentology.tex
rm Experimentology_fixed.tex 
Rscript -e 'tinytex::lualatex("Experimentology.tex", pdf_file = "Experimentology.pdf")'
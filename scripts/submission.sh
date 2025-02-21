#!/bin/bash

# for f in *_files/*pdf/*png images/*/*png; do out=submit/${f/.png/.jpg}; dir=$(dirname $out); echo $f; mkdir -p $dir; magick $f -colorspace cmyk -quality 100 $out; done
for f in *_files/*pdf/*png images/*/*png; do out=submit/${f/.png/.jpg}; dir=$(dirname $out); echo $f; mkdir -p $dir; magick $f -profile "../USWebCoatedSWOP.icc" -quality 100 $out; done

cp Experimentology_fixed.tex submit/Experimentology_fixed.tex
sed s/png/jpg/g submit/Experimentology_fixed.tex > submit/Experimentology_jpgs.tex

# tinytex::lualatex("Experimentology_jpgs.tex", pdf_file = "Experimentology.pdf")

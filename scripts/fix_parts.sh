#!/bin/bash

awk '
{
    if ($0 ~ /^\\part{/) {
        getline blank_line
        if (blank_line ~ /^$/) {
            getline next_line
            if (next_line ~ /^\\section\*\{\}\\label\{bibliography-[0-9]+\}/) {
                part_line = $0
                print next_line
                next
            } else {
                print $0
                print blank_line
                print next_line
                next
            }
        } else {
            print $0
            print blank_line
            next
        }
    }

    if (printing_bibliography) {
        bibliography_block = bibliography_block "\n" $0
    } else {
        print
    }

    if ($0 ~ /^\\section\*\{\}\\label\{bibliography-[0-9]+\}/) {
        printing_bibliography = 1
    }

    if ($0 ~ /^\\end{CSLReferences}/) {
        printing_bibliography = 0
        print bibliography_block
        print ""
        if (part_line) {
            print part_line
            print ""
            part_line = ""
        }
        bibliography_block = ""
    }
}' Experimentology.tex > Experimentology_fixed.tex
# }' "$1" > temp.tex && mv temp.tex "$1"
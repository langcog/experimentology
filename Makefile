clean:
	-rm -rf *_cache *_files

render:
	quarto render

render-ug: clean
	-rm -rf _site-undergrad
	quarto render --profile undergrad

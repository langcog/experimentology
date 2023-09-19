render:
	quarto render

render-ug:
	-rm -rf _site-undergrad
	quarto render --profile undergrad

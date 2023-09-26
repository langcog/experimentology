clean:
	-rm -rf *_cache *_files

render:
	quarto render

render-ug-pdf: clean
	-rm -rf _site-undergrad
	cp _quarto_pdf.yml _quarto.yml
	quarto render --profile undergrad

render-ug-html: clean
	-rm -rf _site-undergrad
	cp _quarto_html.yml _quarto.yml
	quarto render --profile undergrad

render-ug-all: clean
	-rm -rf _site-undergrad
	cp _quarto_all.yml _quarto.yml
	quarto render --profile undergrad

render-ug-trace: clean
	-rm -rf _site-undergrad
	cp _quarto_pdf.yml _quarto.yml
	QUARTO_TRACE_FILTERS=output.json quarto render --profile undergrad

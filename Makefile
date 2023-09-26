clean:
	-rm -rf *_cache *_files

render:
	quarto render

render-ug: clean
	-rm -rf _site-undergrad
	cp _quarto_pdf.yml _quarto.yml
	quarto render --profile undergrad

render-ug-trace: clean
	-rm -rf _site-undergrad
	cp _quarto_pdf.yml _quarto.yml
	QUARTO_TRACE_FILTERS=output.json quarto render --profile undergrad

DOCKER_USERNAME = poldrack


# code to check environment variables
# from https://stackoverflow.com/questions/4728810/makefile-variable-as-prerequisite

guard-%:
	@ if [ "${${*}}" = "" ]; then \
		echo "Environment variable $* not set"; \
		exit 1; \
	fi

current_dir = $(shell pwd)


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


docker-deploy: docker-login docker-upload

docker-login: guard-DOCKER_USERNAME guard-DOCKER_PASSWORD
	docker login --username=$(DOCKER_USERNAME) --password=$(DOCKER_PASSWORD)

docker-upload: guard-DOCKER_USERNAME
	docker push $(DOCKER_USERNAME)/experimentology

docker-build: guard-DOCKER_USERNAME
	docker build -t $(DOCKER_USERNAME)/experimentology .

# add -p 8888:8888 for jupyter
shell: guard-DOCKER_USERNAME
	docker run -it --entrypoint=bash -v $(current_dir):/experimentology $(DOCKER_USERNAME)/experimentology

docker-render-html:
	docker run -it --entrypoint="" -v $(current_dir):/experimentology $(DOCKER_USERNAME)/experimentology make render-ug-html

docker-render-pdf:
	docker run -it --entrypoint="" -v $(current_dir):/experimentology $(DOCKER_USERNAME)/experimentology make render-ug-pdf

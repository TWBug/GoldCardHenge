.PHONY: staging
	
build:
	@npm run build
	
staging: build
	@rsync -rzuhP ./public/ spiffy:/var/www/taiwan-goldcard-staging
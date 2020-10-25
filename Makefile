.PHONY: staging
	
build:
	@npm run build:staging
	
staging: build
	@rsync -rzuhP ./public/ spiffy:/var/www/taiwan-goldcard-staging
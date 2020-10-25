.PHONY: staging
	
build:
	@npm run build:staging
	
staging: build
	@rsync -rzuhP ./public/ goldcard-staging:/var/www/taiwan-goldcard-staging
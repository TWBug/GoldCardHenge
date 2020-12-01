.PHONY: staging opencc lunr-index
	
build:
	@npm run build:staging
	
node_modules/nodejieba:
	@npm install nodejieba

tmp/jieba.dict.utf8: node_modules/nodejieba
	@cp node_modules/nodejieba/dict/jieba.dict.utf8 tmp/
	
# Warn if opencc is not installed, but keep it a warning. 
opencc:
	@if [[ ! -x $$(which opencc) ]]; then echo "WARNING: opencc not found. Try running brew install opencc." && exit 0; fi
	
tmp/trad.dict.utf8: opencc tmp/jieba.dict.utf8
	opencc --input tmp/jieba.dict.utf8 --output tmp/trad.dict.utf8
	
dict/trad.dict.utf8: tmp/trad.dict.utf8
	@mkdir -p dict
	@cp tmp/trad.dict.utf8 dict/
	
# NOTE: This really depends on dict/trad.dict.utf8 but we get no caching wins
# whatsoever when building on netlify because there is no tmp directory. So I'm
# just running it directly.
lunr-index:
	node scripts/build-lunr-index.js
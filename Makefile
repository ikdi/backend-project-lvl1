deploy: install link
install:
	npm ci
link:
	npm link
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run	
lint:
	npx eslint .
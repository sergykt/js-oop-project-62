install:
	npm ci

local-install:
	npm install
	sudo npm link

publish:
	npm publish --dry-run

lint:
	npx eslint .

test: 
	npm test
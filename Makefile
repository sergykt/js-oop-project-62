install:
	npm ci

local-install:
	npm install
	sudo npm link

uninstall:
	sudo npm uninstall -g @hexlet/code

publish:
	npm publish --dry-run

lint:
	npx eslint .

test: 
	npm test
SHELL := /bin/bash
PATH := node_modules/.bin:$(PATH)

js:
	browserify -r tape > bundle.js

css:
	stylus deus.stylus --inline \
		--use autoprefixer-stylus --with "{ browsers: ['last 2 versions'] }"

html:
	vulcanize deus.html --inline-css \
		--exclude bower_components/polymer/polymer.html \
		> deus.build.html

release:
	make js css html
	sed -i 's/\.\/bower_components/../g' deus.build.html

js:
	browserify -r tape > bundle.js

css:
	stylus --inline deus.stylus

html:
	vulcanize deus.html --inline-css \
		--exclude bower_components/polymer/polymer.html \
		> deus.build.html

release:
	make js css html
	sed -i 's/\.\/bower_components/../g' deus.build.html

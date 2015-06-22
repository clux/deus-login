# Deus Login
[![development dependency status](https://david-dm.org/clux/deus-login/dev-status.svg)](https://david-dm.org/clux/deus-login)

UI component experiment using something similar to the login design from the original Deus Ex game. The component relies on the [polymer library](http://www.polymer-project.org/).

The login frame looks like this:
![frame!](https://github.com/clux/deus-login/raw/master/deus9.png)

## Installation
Install from [bower](https://www.npmjs.com/package/bower):

```sh
bower install clux/deus-login
```

Then add an import to the built html:

```html
<link rel="import" href="./bower_components/deus-login/deus-login.build.html">
```

Then include it by using the custom tag:

```html
<deus-login></deus-login>
```

Then, you can listen out in your JavaScript for the `login` event, and do whatever with it.

```js
var dx = document.querySelector('deus-login');
dx.addEventListener('login', function (data) {
  // pass data on maybe
});
```

## Dependencies
You need to include a script tag to polyfill web component support on browsers other than chrome:

```html
<script src="./bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
```

and you will probably want to [vulcanize](https://www.npmjs.com/package/vulcanize) the component into your set of components, so all of them use the same version of polymer.

## Testing
Clone and from the directory run the following:

```sh
bower install
npm install
npm run testling
```

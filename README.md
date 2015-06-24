# Deus Login
[![development dependency status](https://david-dm.org/clux/deus-login/dev-status.svg)](https://david-dm.org/clux/deus-login)

Login `<form>` web component experiment. It creates a login form looking like the login style from the original Deus Ex game. The component relies on the [polymer library](http://www.polymer-project.org/).

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
<form action="/login" method="post" autocomplete="off" is="deus-login" dxlogo="http://logo.url.png">Loading</form>
```

Then, observe the form like you would any other form and intercept the forms `submit` event. If login fails, you can give visual feedback:

```js
var f = document.querySelector('form');
f.addEventListener('submit', function (e) {
  e.preventDefault();
  f.reason = 'Pretend this failed';
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

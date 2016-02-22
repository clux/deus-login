var test = require('tape');

test('link', function (t) {
  t.plan(1);
  var tag = document.createElement('form', 'deus-login');
  document.body.appendChild(tag);

  // wait for the element to be ready + some extra time
  setTimeout(function () {
    var el = document.querySelector('form');
    el.reason = 'Login failure reason here';
    t.equal(el.is, 'deus-login', 'polymer extended it');
    t.end();
  }, 200);
});

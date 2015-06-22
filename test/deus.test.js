var test = require('tape');

test("link", function (t) {
  t.plan(1);
  var tag = document.createElement('deus-login');
  document.body.appendChild(tag);

  // wait for the element to be ready + some extra time
  setTimeout(function () {
    var el = document.querySelector('deus-login');
    t.equal(el.is, 'deus-login', 'polymer extended it');
    t.end();
  }, 200);
});

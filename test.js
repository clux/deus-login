var phantom = require('phantom');
var co = require('co');

var checkFile = function *(file) {
  var ph = yield phantom.create();
  var page = yield ph.createPage();
  yield page.open(file);
  // TODO: when phantom implements this, do better than log errors from js
  // try putting a throw in demo or relevant test file (it will log currently)
  page.close();
  ph.exit();
};

co(function *() {
  yield *checkFile('./demo.html');
});

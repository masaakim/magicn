
var magicn = require('../');
var test = require('colored-tape');

test('return true', function(t) {
  var css = '.site-nav > li:hover .dropdown{position:absolute;top:37px;left:0;}';

  t.equal(true, magicn(css));

  t.end();
});

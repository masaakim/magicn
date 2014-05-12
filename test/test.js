
var magicn = require('../');
var test = require('colored-tape');

test('return true', function(t) {
  var css = '.site-nav > li:hover .dropdown{position:absolute;top:37px;left:0;}';

  var result = magicn(css);
  var expected = [
    { start: { line: 1, column: 1 },
      end: { line: 1, column: 67 },
      source: undefined }
  ];

  t.same(result, expected);

  t.end();
});

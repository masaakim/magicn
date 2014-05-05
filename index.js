
module.exports = function(css) {
  var parse = require('css-parse');
  var unit = require('css-unit');
  var ast = parse(css);
  ast = ast.stylesheet;

  var ret = false;

  matchedProp = [
    'top',
    'bottom',
    'left',
    'right',
    'margin',
    'margin-top',
    'margin-bottom',
    'margin-left',
    'margin-right',
    'padding',
    'padding-top',
    'padding-bottom',
    'padding-left',
    'padding-right',
    'height',
    'width'
  ];

  ast.rules.forEach(function visit(rule) {
    if (rule.rules) rule.rules.forEach(visit);

    if (!rule.selectors) return;

    rule.declarations.forEach(function(declaration) {
      matchedProp.forEach(function(prop) {
        if (declaration.property === prop) {
          var num = unit.rm(declaration.value);
          if (num % 10) ret = true;
        }
      });
    });
  });

  return ret;

};

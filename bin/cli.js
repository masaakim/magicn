#!/usr/bin/env node

var program = require('commander');
var pkg = require('../package.json');
var stdin = require('stdin');
var fs = require('fs');
var magicn = require('../');

program.version(pkg.version).parse(process.argv)

stdin(function(str) {
  console.log(magicn(str));
});

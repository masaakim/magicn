# magicn [![Build Status](https://travis-ci.org/morishitter/magicn.svg)](https://travis-ci.org/morishitter/magicn)

Check whether using magic number in CSS code.

## Installation

```
npm install magicn
```

## Example

```javascript
var magicn = require('magicn');

var css = ".site-nav > li:hover .dropdown{position:absolute;top:37px;left:0;}";

magicn(css);
/*
 * [
 *  { start: { line: 1, column: 1 },
 *    end: { line: 3, column: 2 },
 *    source: undefined }
 * ]
 */
```

or in command line:

```
$ magicn your-css-file.css
```

## License
The MIT License (MIT)

Copyright (c) 2014 Masaaki Morishita

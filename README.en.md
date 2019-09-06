- English
- [简体中文](https://github.com/ibyli/generator-cover/blob/master/README.md)

**Used to quickly generate Chinese book covers**

<p  align="center"> 
  <a href="https://github.com/ibyli/generator-cover/blob/master/LICENSE">
    <img height="28px" alt="License" src="http://img.shields.io/badge/license-mit-blue.svg?style=for-the-badge" style="max-width:100%;">
  </a>
</p>

## Installation

**! Please install before use [ node-canvas](https://github.com/Automattic/node-canvas)**

```c
  $ npm install generator-cover --save
   or
  $ yarn add generator-cover
   or
  $ cnpm install generator-cover --save
```

## Docs

| attribute |             type             |          default          | required |                            explain                             |
| :-------: | :--------------------------: | :-----------------------: | :------: | :------------------------------------------------------------: |
| bookName  |            String            |                           |   yes    |                             title                              |
| fontColor |            Color             |         "#FFFFFF"         |    no    |    font color(Gradient color is not supported at this time)    |
| fontStyle |            String            | '74px "Source Han Serif"' |    no    |  The property uses the same syntax as the CSS font property。  |
|  bgColor  |            Color             |         "#000000"         |    no    | background color(Gradient color is not supported at this time) |
|  bgImage  | local file/remote URL/base64 |                           |    no    |                        Background image                        |
| savePath  |             Path             |        \_\_dirname        |    no    |                         File save path                         |
| fileName  |            String            |      Date.now().jpg       |    no    |                         File save name                         |
|  quality  |            Number            |             1             |    no    |                     Output quality(0 - 1)                      |
|   font    |            Object            |                           |    no    |          Custom font font file name cannot be Chinese          |
|   width   |            Number            |          470(px)          |    no    |                        Cover the width                         |
|  height   |            Number            |          750(px)          |    no    |                        Cover the height                        |
|   left    |            Number            |          90(px)           |    no    |                      Left margin of title                      |

## Examples

```javascript
'use strict';

const generatorCover = require('generator-cover');

generatorCover({
  bookName: '醒世姻缘传',
  fontStyle: '74px "Source Han Serif"',
  bgColor: '#BCE3E7',
  fontColor: '#4A70A9',
  fileName: '醒世姻缘传.png',
  savePath: __dirname,
  quality: 1,
  width: 470,
  height: 750,
  left: 90
  // font: {
  //   fontPath: 'fontPath',
  //   family: 'fontFamily'
  // },
}).then(res => {
  console.log('cover path:', res);
});
```

## License

[MIT](https://github.com/ibyli/generator-cover/blob/master/LICENSE)

Copyright (c) 2019-present, [ibyli](https://github.com/ibyli/)

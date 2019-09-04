## 简介

用于快速生成图书封面

## 使用

**! 使用前请安装 [ node-canvas](https://github.com/Automattic/node-canvas)**

```
  $ npm install generator-cover --save
   or
  $ yarn add generator-cover
   or
  $ cnpm install generator-cover --save
```

```javascript
'use strict';

const generatorCover = require('generator-cover');

generatorCover({
  bookName: '醒世姻缘传',
  fontStyle: '74px "Source Han Serif"',
  bgColor: '#3A7F98',
  fontColor: '#FFFFFF',
  savePath: __dirname,
  fileName: '醒世姻缘传.png',
  // ? 输出质量 quality from 0 to 1
  quality: 1
  // ? 自定义字体
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

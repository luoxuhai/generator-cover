- 简体中文
- [English](https://github.com/ibyli/generator-cover/blob/master/README.en.md)

**用于快速生成中文图书封面**

<p  align="center"> 
  <a href="https://github.com/ibyli/generator-cover/blob/master/LICENSE">
    <img height="28px" alt="License" src="http://img.shields.io/badge/license-mit-blue.svg?style=for-the-badge" style="max-width:100%;">
  </a>
</p>

## 安装

**! 使用前请安装 [ node-canvas](https://github.com/Automattic/node-canvas)**

```c
  $ npm install generator-cover --save
   or
  $ yarn add generator-cover
   or
  $ cnpm install generator-cover --save
```

## 文档

|   属性    |             类型             |          默认值           | 必填 |                说明                 |
| :-------: | :--------------------------: | :-----------------------: | :--: | :---------------------------------: |
| bookName  |            String            |                           |  是  |                书名                 |
| fontColor |            Color             |         "#FFFFFF"         |  否  |      字体颜色(暂不支持渐变色)       |
| fontStyle |            String            | '74px "Source Han Serif"' |  否  | 字体样式 语法与 CSS font 属性相同。 |
|  bgColor  |            Color             |         "#000000"         |  否  |      背景颜色(暂不支持渐变色)       |
|  bgImage  | local file/remote URL/base64 |                           |  否  |              背景图片               |
| savePath  |             Path             |        \_\_dirname        |  否  |            文件保存位置             |
| fileName  |            String            |      Date.now().jpg       |  否  |             文件保存名              |
|  quality  |            Number            |             1             |  否  |           输出质量(0 - 1)           |
|   font    |            Object            |                           |  否  |   自定义字体 字体文件名不能为中文   |
|   width   |            Number            |          470(px)          |  否  |              封面宽度               |
|  height   |            Number            |          750(px)          |  否  |              封面高度               |
|   left    |            Number            |          90(px)           |  否  |             书名左边距              |

## 例子

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

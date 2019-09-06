'use strict';

const generatorCover = require('../src');

generatorCover({
  bookName: '醒世姻缘传',
  // fontStyle 属性使用的语法与 CSS font 属性相同。
  fontStyle: '74px "Source Han Serif"',
  bgColor: '#3A7F98',
  // 支持 local file |  remote URL | base64
  bgImage: '', // 支持
  fontColor: '#FFFFFF',
  savePath: __dirname,
  // 生成文件名
  fileName: '醒世姻缘传.png',
  // 输出质量 quality from 0 to 1
  quality: 1
  // 自定义字体 字体文件名不能为中文
  // font: {
  //   fontPath: 'fontPath',
  //   family: 'fontFamily'
  // },
}).then(res => {
  console.log('cover path:', res);
});

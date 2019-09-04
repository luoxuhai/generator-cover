'use strict';

const generatorCover = require('../src');

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

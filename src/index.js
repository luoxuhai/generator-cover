/*
 * generator-cover
 * Copyright(c) 2019-present izbyi (https://github.com/ibyli)
 * MIT Licensed
 */

'use strict';

const fs = require('fs');
const { promisify } = require('util');
const { createCanvas, registerFont, Image, loadImage } = require('canvas');
const readFile = promisify(fs.readFile);

module.exports = async ({
  bookName,
  // TODO: 作者 出版社
  // bottomWatermark,
  // author,
  fontStyle = '74px "Source Han Serif"',
  font,
  bgImage,
  bgColor,
  fontColor = '#FFFFFF',
  savePath = __dirname,
  fileName = `${Date.now()}.jpg`,
  quality = 1,
  width = 470,
  height = 750
}) => {
  bookName = bookName.trim();

  if (font && font.fontPath)
    registerFont(font.fontPath, {
      family: font.family
    });

  const fontScale = 1.2,
    canvas = createCanvas(width, height),
    ctx = canvas.getContext('2d');

  // TODO: 渐变背景
  // const grd=cxt.createLinearGradient(0, 0, width, height);
  // grd.addColorStop(0, "#FF0000");

  if (bgColor) {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
  }

  if (bgImage) {
    let image = new Image();
    if (bgImage.startsWith('http')) {
      image = await loadImage(bgImage);
    } else if (bgImage.startsWith('data:image/')) image.src = bgImage;
    else image.src = await readFile(bgImage);
    ctx.drawImage(image, 0, 0, width, height);
  }

  let fontSize = Number(fontStyle.split(' ')[0].replace('px', ''));
  ctx.font = fontStyle;
  ctx.fillStyle = fontColor;
  if ((fontSize * bookName.length) / height > 0.6) {
    ctx.font = fontStyle.replace(`${fontSize}px`, `${fontSize / fontScale}px`);
    fontSize /= fontScale;
  }

  const fontHeight = fontSize + fontSize / 4;
  let startOff = (height - bookName.length * fontSize) * (2 / 5);

  for (let i = 1; i <= bookName.length; i++) {
    if ((fontSize * i) / height > 0.6) {
      startOff = (height - i * fontSize) * (2 / 5);
      break;
    }
  }

  let index = 0;
  for (let i = 0; i < bookName.length; i++) {
    if ((fontSize * (i + 1)) / height > 0.6) {
      ctx.fillText(
        bookName.charAt(i),
        100 + fontSize + 20,
        startOff + fontHeight * index++
      );
    } else ctx.fillText(bookName.charAt(i), 100, startOff + fontHeight * i);
  }

  ctx.save();

  const base64 = await promisify(canvas.toDataURL).call(
    canvas,
    'image/jpeg',
    quality
  );

  const dataBuffer = new Buffer.from(
    base64.replace(/^data:image\/\w+;base64,/, ''),
    'base64'
  );

  fs.mkdirSync(savePath, {
    recursive: true
  });

  fs.writeFileSync(`${savePath}/${fileName}`, dataBuffer);
  return `${savePath}/${fileName}`;
};

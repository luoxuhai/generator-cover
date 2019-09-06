const assert = require('assert');
const generatorCover = require('../src');

describe('generator cover', () => {
  it(`back to cover path: ${__dirname}/醒世姻缘传.jpg`, async () => {
    assert.strictEqual(
      await generatorCover({
        bookName: '醒世姻缘传',
        fontStyle: '70px "Source Han Serif"',
        savePath: __dirname,
        fileName: '醒世姻缘传.jpg',
        bgColor: '#BCE3E7',
        fontColor: '#4A70A9',
        quality: 1
      }),
      `${__dirname}/醒世姻缘传.jpg`
    );
  });
});

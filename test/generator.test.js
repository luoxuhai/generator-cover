const assert = require('assert');
const generatorCover = require('../src');

describe('generator cover', () => {
  it(`back to cover path: ${__dirname}/醒世姻缘传.jpg`, async () => {
    assert.strictEqual(
      await generatorCover({
        bookName: '醒世姻缘传',
        fontStyle: '74px "Source Han Serif"',
        savePath: __dirname,
        fileName: '醒世姻缘传.jpg',
        quality: 0.5,
      }),
      `${__dirname}/醒世姻缘传.jpg`
    );
  });
});

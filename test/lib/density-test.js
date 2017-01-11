const sut = require("../../lib/density");
const {metric, imperial} = require("../../lib/types");

describe(__filename, function () {
  describe("convert", function () {
    describe("with a valid values", function () {
      [
        {expected: 0},
        {value: 1, expected: 1},
        {value: 99, expected: 99, from: metric},
        {value: 99, expected: 99, from: metric, to: metric},
        {value: 999, expected: 999, from: "MeTrIc", to: "mEtRiC"},
        {value: 1, expected: 0.062428, from: metric, to: imperial},
        {value: 1, expected: 0.062428, to: imperial},
        {value: 2, expected: 0.124856, from: metric, to: imperial},
        {value: 2, expected: 0.124856, to: imperial},
        {value: 3, expected: 0.187284, from: metric, to: imperial},
        {value: 3, expected: 0.187284, to: imperial},
        {value: 4, expected: 0.249712, from: metric, to: imperial},
        {value: 4, expected: 0.249712, to: imperial},
        {value: 5, expected: 0.31214, from: metric, to: imperial},
        {value: 5, expected: 0.31214, to: imperial},
        {value: 99, expected: 6.180371999999999, to: imperial},
        {value: 10000, expected: 624.28, to: imperial},
        {value: 1, expected: 16.018453258153393, from: imperial},
        {value: 2, expected: 32.036906516306786, from: imperial},
        {value: 99, expected: 1585.8268725571859, from: imperial},
        {value: 10, expected: 160.18453258153394, from: imperial},
        {value: 432987, expected: 432987, from: imperial, to: imperial},
        {value: 302, expected: 302, from: imperial, to: imperial},
        {value: 1209475, expected: 1209475, from: imperial, to: imperial},
        {value: 32879, expected: 32879, from: "ImPeRiAl", to: "iMpErIaL"},
      ].forEach((test) => {
        it(JSON.stringify(test), function () {
          const actual = sut.convert(test);
          actual.should.equal(test.expected);
        });
      });
    });

    describe("with invalid values", function () {
      [
        {from: metric, to: "fooboo"},
        {from: "ubuu", to: imperial},
        {from: "ubuu", to: "fooboo"},
      ].forEach((test) => {
        it(JSON.stringify(test), function () {
          expect(() => sut.convert(test)).to.throw(`Conversion from ${test.from} to ${test.to} unknown`);
        });
      });
    });
  });
});

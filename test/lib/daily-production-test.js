const sut = require("../../lib/daily-production");
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
        {value: 1, expected: 6.289, from: metric, to: imperial},
        {value: 1, expected: 6.289, to: imperial},
        {value: 2, expected: 12.578, from: metric, to: imperial},
        {value: 2, expected: 12.578, to: imperial},
        {value: 3, expected: 18.866999999999997, from: metric, to: imperial},
        {value: 3, expected: 18.866999999999997, to: imperial},
        {value: 4, expected: 25.156, from: metric, to: imperial},
        {value: 4, expected: 25.156, to: imperial},
        {value: 5, expected: 31.445, from: metric, to: imperial},
        {value: 5, expected: 31.445, to: imperial},
        {value: 99, expected: 622.611, to: imperial},
        {value: 10000, expected: 62890, to: imperial},
        {value: 6.289, expected: 1, from: imperial},
        {value: 12.578, expected: 2, from: imperial},
        {value: 18.866999999999997, expected: 2.9999999999999996, from: imperial},
        {value: 4, expected: 0.6360311655271108, from: imperial},
        {value: 5, expected: 0.7950389569088886, from: imperial},
        {value: 6, expected: 0.9540467482906663, from: imperial},
        {value: 7, expected: 1.113054539672444, from: imperial},
        {value: 8, expected: 1.2720623310542216, from: imperial},
        {value: 9, expected: 1.4310701224359994, from: imperial},
        {value: 10, expected: 1.5900779138177772, from: imperial},
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

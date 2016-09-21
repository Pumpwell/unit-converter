const sut = require("../../lib/load");
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
        {value: 1, expected: 2.24808943871, from: metric, to: imperial},
        {value: 1, expected: 2.24808943871, to: imperial},
        {value: 2, expected: 4.49617887742, from: metric, to: imperial},
        {value: 2, expected: 4.49617887742, to: imperial},
        {value: 3, expected: 6.74426831613, from: metric, to: imperial},
        {value: 3, expected: 6.74426831613, to: imperial},
        {value: 4, expected: 8.99235775484, from: metric, to: imperial},
        {value: 4, expected: 8.99235775484, to: imperial},
        {value: 5, expected: 11.24044719355, from: metric, to: imperial},
        {value: 5, expected: 11.24044719355, to: imperial},
        {value: 99, expected: 222.56085443229, to: imperial},
        {value: 10000, expected: 22480.8943871, to: imperial},
        {value: 0.7375621492772654, expected: 0.3280839883756999, from: imperial},
        {value: 1, expected: 0.4448221599999244, from: imperial},
        {value: 2, expected: 0.8896443199998488, from: imperial},
        {value: 3, expected: 1.3344664799997734, from: imperial},
        {value: 4, expected: 1.7792886399996977, from: imperial},
        {value: 5, expected: 2.224110799999622, from: imperial},
        {value: 6, expected: 2.668932959999547, from: imperial},
        {value: 7, expected: 3.113755119999471, from: imperial},
        {value: 8, expected: 3.5585772799993953, from: imperial},
        {value: 9, expected: 4.00339943999932, from: imperial},
        {value: 10, expected: 4.448221599999244, from: imperial},
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

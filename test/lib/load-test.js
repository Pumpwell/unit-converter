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
        {value: 1, expected: 2.248089430997105, from: metric, to: imperial},
        {value: 1, expected: 2.248089430997105, to: imperial},
        {value: 2, expected: 4.49617886199421, from: metric, to: imperial},
        {value: 2, expected: 4.49617886199421, to: imperial},
        {value: 3, expected: 6.744268292991315, from: metric, to: imperial},
        {value: 3, expected: 6.744268292991315, to: imperial},
        {value: 4, expected: 8.99235772398842, from: metric, to: imperial},
        {value: 4, expected: 8.99235772398842, to: imperial},
        {value: 5, expected: 11.240447154985524, from: metric, to: imperial},
        {value: 5, expected: 11.240447154985524, to: imperial},
        {value: 99, expected: 222.5608536687134, to: imperial},
        {value: 10000, expected: 22480.89430997105, to: imperial},
        {value: 0.7375621492772654, expected: 0.3280839895013123, from: imperial},
        {value: 1, expected: 0.44482216152605, from: imperial},
        {value: 2, expected: 0.8896443230521, from: imperial},
        {value: 3, expected: 1.3344664845781498, from: imperial},
        {value: 4, expected: 1.7792886461042, from: imperial},
        {value: 5, expected: 2.22411080763025, from: imperial},
        {value: 6, expected: 2.6689329691562995, from: imperial},
        {value: 7, expected: 3.1137551306823497, from: imperial},
        {value: 8, expected: 3.5585772922084, from: imperial},
        {value: 9, expected: 4.00339945373445, from: imperial},
        {value: 10, expected: 4.4482216152605, from: imperial},
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

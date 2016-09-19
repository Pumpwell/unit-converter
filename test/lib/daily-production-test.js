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
        {value: 1, expected: 6.28981, from: metric, to: imperial},
        {value: 1, expected: 6.28981, to: imperial},
        {value: 2, expected: 12.57962, from: metric, to: imperial},
        {value: 2, expected: 12.57962, to: imperial},
        {value: 3, expected: 18.86943, from: metric, to: imperial},
        {value: 3, expected: 18.86943, to: imperial},
        {value: 4, expected: 25.15924, from: metric, to: imperial},
        {value: 4, expected: 25.15924, to: imperial},
        {value: 5, expected: 31.44905, from: metric, to: imperial},
        {value: 5, expected: 31.44905, to: imperial},
        {value: 99, expected: 622.69119, to: imperial},
        {value: 10000, expected: 62898.1, to: imperial},
        {value: 6.289, expected: 0.9998712202753341, from: imperial},
        {value: 12.578, expected: 1.9997424405506683, from: imperial},
        {value: 18.866999999999997, expected: 2.999613660826002, from: imperial},
        {value: 4, expected: 0.6359492576087354, from: imperial},
        {value: 5, expected: 0.7949365720109193, from: imperial},
        {value: 6, expected: 0.9539238864131031, from: imperial},
        {value: 7, expected: 1.1129112008152868, from: imperial},
        {value: 8, expected: 1.2718985152174709, from: imperial},
        {value: 9, expected: 1.4308858296196547, from: imperial},
        {value: 10, expected: 1.5898731440218385, from: imperial},
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

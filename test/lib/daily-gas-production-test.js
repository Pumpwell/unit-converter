const sut = require("../../lib/daily-gas-production");
const {metric, imperial} = require("../../lib/types");

describe(__filename, function () {
  describe("convert", function () {
    describe("with a valid values", function () {
      [
        {expected: 0},
        {value:  1, expected: 0.001, to: "e3m3/d"},
        {value:  1000, expected: 1, to: "e3m3/d"},
        {value:  10000, expected: 10, to: "e3m3/d"},
        {value:  1, expected: 35.314666213, to: "cf/d"},
        {value:  1000, expected: 35314.666213000004, to: "cf/d"},
        {value:  250, expected: 8828.666553250001, to: "cf/d"},
        {value:  1, expected: 0.035314666213, to: "Mcf/d"},
        {value:  1000, expected: 35.314666213, to: "Mcf/d"},
        {value:  250, expected: 8.828666553250001, to: "Mcf/d"},

        {value:  1, expected: 1, from: "e3m3/d", to: "e3m3/d"},
        {value:  1, expected: 1000, from: "e3m3/d", to: "m3/d"},
        {value:  1000, expected: 1000000, from: "e3m3/d", to: "m3/d"},
        {value:  1.5, expected: 1500, from: "e3m3/d", to: "m3/d"},
        {value:  1, expected: 35314.666213, from: "e3m3/d", to: "cf/d"},
        {value:  100, expected: 3531466.6212999998, from: "e3m3/d", to: "cf/d"},
        {value:  3.5, expected: 123601.33174549999, from: "e3m3/d", to: "cf/d"},
        {value:  1, expected: 35.314666213, from: "e3m3/d", to: "Mcf/d"},
        {value:  100, expected: 3531.4666213, from: "e3m3/d", to: "Mcf/d"},
        {value:  250, expected: 8828.666553250001, from: "e3m3/d", to: "Mcf/d"},

        {value:  1, expected: 1, from: "cf/d", to: "cf/d"},
        {value:  1, expected:  0.028316847, from: "cf/d", to: "m3/d"},
        {value:  1000, expected:  28.316847, from: "cf/d", to: "m3/d"},
        {value:  251, expected:  7.107528597, from: "cf/d", to: "m3/d"},
        {value:  1000, expected:  0.028316846999999998, from: "cf/d", to: "e3m3/d"},
        {value:  12512, expected:  0.35430038966399996, from: "cf/d", to: "e3m3/d"},
        {value:  271512, expected:  7.688363762664, from: "cf/d", to: "e3m3/d"},
        {value:  1, expected: 0.001, from: "cf/d", to: "Mcf/d"},
        {value:  1000, expected: 1, from: "cf/d", to: "Mcf/d"},
        {value:  1230, expected: 1.23, from: "cf/d", to: "Mcf/d"},
        {value:  12305512, expected: 12305.512, from: "cf/d", to: "Mcf/d"},

        {value:  1, expected: 1, from: "Mcf/d", to: "Mcf/d"},
        {value:  1, expected: 28.316847, from: "Mcf/d", to: "m3/d"},
        {value:  5, expected: 141.584235, from: "Mcf/d", to: "m3/d"},
        {value:  51, expected: 1444.159197, from: "Mcf/d", to: "m3/d"},
        {value:  1, expected: 0.028316847, from: "Mcf/d", to: "e3m3/d"},
        {value:  10, expected: 0.28316847, from: "Mcf/d", to: "e3m3/d"},
        {value:  1212, expected: 34.320018564, from: "Mcf/d", to: "e3m3/d"},
        {value:  15000, expected: 424.752705, from: "Mcf/d", to: "e3m3/d"},
        {value:  1, expected: 1000, from: "Mcf/d", to: "cf/d"},
        {value:  1.5, expected: 1500, from: "Mcf/d", to: "cf/d"},
        {value:  1212, expected: 1212000, from: "Mcf/d", to: "cf/d"},
        {value:  0.001, expected: 1, from: "Mcf/d", to: "cf/d"},
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

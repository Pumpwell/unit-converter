const sut = require("../../lib/torque");
const {metric, imperial} = sut.types;

describe(__filename, function () {
  describe("convert", function () {
    describe("with a valid values", function () {
      [
        {expected: 0},
        {value: 1, expected: 1},
        {value: 99, expected: 99, from: metric},
        {value: 99, expected: 99, from: metric, to: metric},
        {value: 999, expected: 999, from: "MeTrIc", to: "mEtRiC"},
        {value: 1, expected: 0.7375621492772654, from: metric, to: imperial},
        {value: 1, expected: 0.7375621492772654, to: imperial},
        {value: 2, expected: 1.4751242985545308, from: metric, to: imperial},
        {value: 2, expected: 1.4751242985545308, to: imperial},
        {value: 3, expected: 2.2126864478317962, from: metric, to: imperial},
        {value: 3, expected: 2.2126864478317962, to: imperial},
        {value: 4, expected: 2.9502485971090615, from: metric, to: imperial},
        {value: 4, expected: 2.9502485971090615, to: imperial},
        {value: 5, expected: 3.6878107463863268, from: metric, to: imperial},
        {value: 5, expected: 3.6878107463863268, to: imperial},
        {value: 99, expected: 73.01865277844927, to: imperial},
        {value: 10000, expected: 7375.621492772654, to: imperial},
        {value: 0.7375621492772654, expected: 1, from: imperial},
        {value: 1, expected: 1.3558179483314003, from: imperial},
        {value: 2, expected: 2.7116358966628007, from: imperial},
        {value: 3, expected: 4.067453844994201, from: imperial},
        {value: 4, expected: 5.423271793325601, from: imperial},
        {value: 5, expected: 6.7790897416570015, from: imperial},
        {value: 6, expected: 8.134907689988403, from: imperial},
        {value: 7, expected: 9.490725638319802, from: imperial},
        {value: 8, expected: 10.846543586651203, from: imperial},
        {value: 9, expected: 12.202361534982604, from: imperial},
        {value: 10, expected: 13.558179483314003, from: imperial},
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

  describe("types", function () {
    it("should have types object", function () {
      sut.should.have.property("types");
      sinon.match.object.test(sut.types).should.be.true;
    });
  });
});

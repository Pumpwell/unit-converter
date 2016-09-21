const {metric, imperial} = require("../../lib/types");

describe(__filename, function () {
  beforeEach(function () {
    this.sut = require("../../lib/position");
  });

  describe("test scenarios", function () {
    [
      {expected: 0},
      {expected: 2.54, value: 1, from: imperial},
      {expected: 5.08, value: 2, from: imperial},
      {expected: 7.619999999999999, value: 3, from: imperial},
      {expected: 10.16, value: 4, from: imperial},
      {expected: 12.7, value: 5, from: imperial},
      {expected: 15.239999999999998, value: 6, from: imperial},
      {expected: 17.779999999999998, value: 7, from: imperial},
      {expected: 20.32, value: 8, from: imperial},
      {expected: 22.86, value: 9, from: imperial},
      {expected: 25.4, value: 10, from: imperial},
      {expected: 0.3937007874015748, value: 1, to: imperial},
      {expected: 0.7874015748031497, value: 2, to: imperial},
      {expected: 1.1811023622047243, value: 3, to: imperial},
      {expected: 1.5748031496062993, value: 4, to: imperial},
      {expected: 1.9685039370078743, value: 5, to: imperial},
      {expected: 2.3622047244094486, value: 6, to: imperial},
      {expected: 2.755905511811024, value: 7, to: imperial},
      {expected: 3.1496062992125986, value: 8, to: imperial},
      {expected: 3.543307086614173, value: 9, to: imperial},
      {expected: 3.9370078740157486, value: 10, to: imperial},
      {expected: 0.3937007874015748, value: 1, to: imperial, from: metric},
      {expected: 0.7874015748031497, value: 2, to: imperial, from: metric},
      {expected: 1.1811023622047243, value: 3, to: imperial, from: metric},
      {expected: 1.5748031496062993, value: 4, to: imperial, from: metric},
      {expected: 1.9685039370078743, value: 5, to: imperial, from: metric},
      {expected: 2.3622047244094486, value: 6, to: imperial, from: metric},
      {expected: 2.755905511811024, value: 7, to: imperial, from: metric},
      {expected: 3.1496062992125986, value: 8, to: imperial, from: metric},
      {expected: 3.543307086614173, value: 9, to: imperial, from: metric},
      {expected: 3.9370078740157486, value: 10, to: imperial, from: metric},
      {expected: 0.3937007874015748, value: 1, to: "imPerial", from: "metrIc"},
      {expected: 0.7874015748031497, value: 2, to: "impERIAL", from: "meTRic"},
      {expected: 1.1811023622047243, value: 3, to: "IMPerial", from: "METRIC"},
      {expected: 1.5748031496062993, value: 4, to: "Imperial", from: "mEtRiC"},
      {expected: 1.9685039370078743, value: 5, to: "IMperial", from: "meTRIC"},
      {expected: 2.3622047244094486, value: 6, to: "IMPERial", from: "MEtric"},
      {expected: 2.755905511811024, value: 7, to: "ImPERIAL", from: "mETrIC"},
      {expected: 3.1496062992125986, value: 8, to: "ImpeRIAL", from: "metriC"},
      {expected: 3.543307086614173, value: 9, to: "imperiAL", from: "MeTRiC"},
      {expected: 3.9370078740157486, value: 10, to: "iMpErIal", from: "MEtRIC"},
    ].forEach((test) => {
      it(JSON.stringify(test), function () {
        const actual = this.sut.convert(test);
        actual.should.equal(test.expected);
      });
    });
  });
});

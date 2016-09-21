const {metric, imperial} = require("../../lib/types");

describe(__filename, function () {
  beforeEach(function () {
    this.sut = require("../../lib/temperature");
  });

  describe("test scenarios", function () {
    [
      {expected: 0},
      {expected: -17.22222222222217, value: 1, from: imperial},
      {expected: -16.66666666666663, value: 2, from: imperial},
      {expected: -16.111111111111086, value: 3, from: imperial},
      {expected: -15.555555555555486, value: 4, from: imperial},
      {expected: -14.999999999999943, value: 5, from: imperial},
      {expected: -14.4444444444444, value: 6, from: imperial},
      {expected: -13.888888888888857, value: 7, from: imperial},
      {expected: -13.333333333333314, value: 8, from: imperial},
      {expected: -12.777777777777715, value: 9, from: imperial},
      {expected: -12.222222222222172, value: 10, from: imperial},
      {expected: 33.7999999999999, value: 1, to: imperial},
      {expected: 35.59999999999991, value: 2, to: imperial},
      {expected: 37.39999999999992, value: 3, to: imperial},
      {expected: 39.19999999999993, value: 4, to: imperial},
      {expected: 40.99999999999994, value: 5, to: imperial},
      {expected: 42.7999999999999, value: 6, to: imperial},
      {expected: 44.59999999999991, value: 7, to: imperial},
      {expected: 46.39999999999992, value: 8, to: imperial},
      {expected: 48.19999999999993, value: 9, to: imperial},
      {expected: 49.99999999999994, value: 10, to: imperial},
      {expected: 33.7999999999999, value: 1, to: imperial, from: metric},
      {expected: 35.59999999999991, value: 2, to: imperial, from: metric},
      {expected: 37.39999999999992, value: 3, to: imperial, from: metric},
      {expected: 39.19999999999993, value: 4, to: imperial, from: metric},
      {expected: 40.99999999999994, value: 5, to: imperial, from: metric},
      {expected: 42.7999999999999, value: 6, to: imperial, from: metric},
      {expected: 44.59999999999991, value: 7, to: imperial, from: metric},
      {expected: 46.39999999999992, value: 8, to: imperial, from: metric},
      {expected: 48.19999999999993, value: 9, to: imperial, from: metric},
      {expected: 49.99999999999994, value: 10, to: imperial, from: metric},
      {expected: 33.7999999999999, value: 1, to: "imPerial", from: "metrIc"},
      {expected: 35.59999999999991, value: 2, to: "impERIAL", from: "meTRic"},
      {expected: 37.39999999999992, value: 3, to: "IMPerial", from: "METRIC"},
      {expected: 39.19999999999993, value: 4, to: "Imperial", from: "mEtRiC"},
      {expected: 40.99999999999994, value: 5, to: "IMperial", from: "meTRIC"},
      {expected: 42.7999999999999, value: 6, to: "IMPERial", from: "MEtric"},
      {expected: 44.59999999999991, value: 7, to: "ImPERIAL", from: "mETrIC"},
      {expected: 46.39999999999992, value: 8, to: "ImpeRIAL", from: "metriC"},
      {expected: 48.19999999999993, value: 9, to: "imperiAL", from: "MeTRiC"},
      {expected: 49.99999999999994, value: 10, to: "iMpErIal", from: "MEtRIC"},
    ].forEach((test) => {
      it(JSON.stringify(test), function () {
        const actual = this.sut.convert(test);
        actual.should.equal(test.expected);
      });
    });
  });
});

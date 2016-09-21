const {metric, imperial} = require("../../lib/types");

describe(__filename, function () {
  beforeEach(function () {
    this.sut = require("../../lib/speed");
  });

  describe("test scenarios", function () {
    [
      {expected: 0},
      {expected: 1.609344, value: 1, from: imperial},
      {expected: 3.218688, value: 2, from: imperial},
      {expected: 4.828032, value: 3, from: imperial},
      {expected: 6.437376, value: 4, from: imperial},
      {expected: 8.046719999999999, value: 5, from: imperial},
      {expected: 9.656064, value: 6, from: imperial},
      {expected: 11.265407999999999, value: 7, from: imperial},
      {expected: 12.874752, value: 8, from: imperial},
      {expected: 14.484096000000001, value: 9, from: imperial},
      {expected: 16.093439999999998, value: 10, from: imperial},
      {expected: 0.621371192237334, value: 1, to: imperial},
      {expected: 1.242742384474668, value: 2, to: imperial},
      {expected: 1.8641135767120018, value: 3, to: imperial},
      {expected: 2.485484768949336, value: 4, to: imperial},
      {expected: 3.1068559611866697, value: 5, to: imperial},
      {expected: 3.7282271534240037, value: 6, to: imperial},
      {expected: 4.349598345661337, value: 7, to: imperial},
      {expected: 4.970969537898672, value: 8, to: imperial},
      {expected: 5.592340730136005, value: 9, to: imperial},
      {expected: 6.2137119223733395, value: 10, to: imperial},
      {expected: 0.621371192237334, value: 1, to: imperial, from: metric},
      {expected: 1.242742384474668, value: 2, to: imperial, from: metric},
      {expected: 1.8641135767120018, value: 3, to: imperial, from: metric},
      {expected: 2.485484768949336, value: 4, to: imperial, from: metric},
      {expected: 3.1068559611866697, value: 5, to: imperial, from: metric},
      {expected: 3.7282271534240037, value: 6, to: imperial, from: metric},
      {expected: 4.349598345661337, value: 7, to: imperial, from: metric},
      {expected: 4.970969537898672, value: 8, to: imperial, from: metric},
      {expected: 5.592340730136005, value: 9, to: imperial, from: metric},
      {expected: 6.2137119223733395, value: 10, to: imperial, from: metric},
      {expected: 0.621371192237334, value: 1, to: "imPerial", from: "metrIc"},
      {expected: 1.242742384474668, value: 2, to: "impERIAL", from: "meTRic"},
      {expected: 1.8641135767120018, value: 3, to: "IMPerial", from: "METRIC"},
      {expected: 2.485484768949336, value: 4, to: "Imperial", from: "mEtRiC"},
      {expected: 3.1068559611866697, value: 5, to: "IMperial", from: "meTRIC"},
      {expected: 3.7282271534240037, value: 6, to: "IMPERial", from: "MEtric"},
      {expected: 4.349598345661337, value: 7, to: "ImPERIAL", from: "mETrIC"},
      {expected: 4.970969537898672, value: 8, to: "ImpeRIAL", from: "metriC"},
      {expected: 5.592340730136005, value: 9, to: "imperiAL", from: "MeTRiC"},
      {expected: 6.2137119223733395, value: 10, to: "iMpErIal", from: "MEtRIC"},
    ].forEach((test) => {
      it(JSON.stringify(test), function () {
        const actual = this.sut.convert(test);
        actual.should.equal(test.expected);
      });
    });
  });
});

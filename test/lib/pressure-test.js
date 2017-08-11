const {metric, imperial} = require("../../lib/types");

describe(__filename, function () {
  beforeEach(function () {
    this.sut = require("../../lib/pressure");
  });

  describe("test scenarios", function () {
    [
      {expected: 0},
      {expected: 6.89475729276459, value: 1, from: imperial},
      {expected: 13.78951458552918, value: 2, from: imperial},
      {expected: 20.68427187829377, value: 3, from: imperial},
      {expected: 27.57902917105836, value: 4, from: imperial},
      {expected: 34.473786463822954, value: 5, from: imperial},
      {expected: 41.36854375658754, value: 6, from: imperial},
      {expected: 48.26330104935213, value: 7, from: imperial},
      {expected: 55.15805834211672, value: 8, from: imperial},
      {expected: 62.052815634881306, value: 9, from: imperial},
      {expected: 68.94757292764591, value: 10, from: imperial},
      {expected: 0.14503773773870293, value: 1, to: imperial},
      {expected: 0.29007547547740586, value: 2, to: imperial},
      {expected: 0.4351132132161088, value: 3, to: imperial},
      {expected: 0.5801509509548117, value: 4, to: imperial},
      {expected: 0.7251886886935147, value: 5, to: imperial},
      {expected: 0.8702264264322176, value: 6, to: imperial},
      {expected: 1.0152641641709206, value: 7, to: imperial},
      {expected: 1.1603019019096235, value: 8, to: imperial},
      {expected: 1.3053396396483263, value: 9, to: imperial},
      {expected: 1.4503773773870294, value: 10, to: imperial},
      {expected: 0.14503773773870293, value: 1, to: imperial, from: metric},
      {expected: 0.29007547547740586, value: 2, to: imperial, from: metric},
      {expected: 0.4351132132161088, value: 3, to: imperial, from: metric},
      {expected: 0.5801509509548117, value: 4, to: imperial, from: metric},
      {expected: 0.7251886886935147, value: 5, to: imperial, from: metric},
      {expected: 0.8702264264322176, value: 6, to: imperial, from: metric},
      {expected: 1.0152641641709206, value: 7, to: imperial, from: metric},
      {expected: 1.1603019019096235, value: 8, to: imperial, from: metric},
      {expected: 1.3053396396483263, value: 9, to: imperial, from: metric},
      {expected: 1.4503773773870294, value: 10, to: imperial, from: metric},
      {expected: 0.14503773773870293, value: 1, to: "imPerial", from: "metrIc"},
      {expected: 0.29007547547740586, value: 2, to: "impERIAL", from: "meTRic"},
      {expected: 0.4351132132161088, value: 3, to: "IMPerial", from: "METRIC"},
      {expected: 0.5801509509548117, value: 4, to: "Imperial", from: "mEtRiC"},
      {expected: 0.7251886886935147, value: 5, to: "IMperial", from: "meTRIC"},
      {expected: 0.8702264264322176, value: 6, to: "IMPERial", from: "MEtric"},
      {expected: 1.0152641641709206, value: 7, to: "ImPERIAL", from: "mETrIC"},
      {expected: 1.1603019019096235, value: 8, to: "ImpeRIAL", from: "metriC"},
      {expected: 1.3053396396483263, value: 9, to: "imperiAL", from: "MeTRiC"},
      {expected: 1.4503773773870294, value: 10, to: "iMpErIal", from: "MEtRIC"},
      {expected: 326220, value: 326.22, to: "Pa", from: "Metric"},
      {expected: 326220, value: 326.22, to: "Pa", from: "kPa"},
      {expected: 326.22, value: 326220, to: "Metric", from: "Pa"},
      {expected: 326.22, value: 326220, to: "kPa", from: "Pa"},
      {expected: 47.31421080511967, value: 326220, to: "Imperial", from: "Pa"},
      {expected: 47.31421080511967, value: 326.22, to: "Imperial", from: "kPa"},
      {expected: 47.31421080511967, value: 326220, to: "psi", from: "Pa"},
      {expected: 47.31421080511967, value: 326.22, to: "psi", from: "kPa"},
      {expected: 326.22, value: 47.31421080511967, to: "Metric", from: "Imperial"},
    ].forEach((test) => {
      it(JSON.stringify(test), function () {
        const actual = this.sut.convert(test);
        actual.should.equal(test.expected);
      });
    });
  });
});

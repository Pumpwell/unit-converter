const math = require("mathjs");

const types = {
  celsius: "degC",
  fahrenheit: "degF",
  imperial: "degF",
  kelvin: "K",
  metric: "degC",
  rankine: "degR",
};

module.exports = {
  convert({from = types.celsius, to = types.celsius, value = 0}) {
    return math.unit(value, types[from.toLocaleLowerCase()]).to(types[to.toLocaleLowerCase()]);
  }
};

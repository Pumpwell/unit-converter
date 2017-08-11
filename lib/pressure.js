const convert = require("./convert");

module.exports = {
  convert: convert({
    imperial: "psi",
    kpa: "kPa",
    metric: "kPa",
    pa: "Pa",
    psi: "psi",
  }),
};

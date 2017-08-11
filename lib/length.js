const convert = require("./convert");

module.exports = {
  convert: convert({
    cm: "cm",
    imperial: "in",
    in: "in",
    metric: "mm",
    m: "m",
    mm: "mm",
  }),
};

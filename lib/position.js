const convert = require("./convert");

module.exports = {
  convert: convert({
    cm: "cm",
    imperial: "in",
    in: "in",
    metric: "cm",
    m: "m",
    mm: "mm",
  }),
};

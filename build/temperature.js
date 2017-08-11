"use strict";

var convert = require("./convert");

module.exports = {
  convert: convert({
    c: "degC",
    celsius: "degC",
    f: "degF",
    fahrenheit: "degF",
    imperial: "degF",
    k: "K",
    kelvin: "K",
    metric: "degC",
    rankine: "degR"
  })
};
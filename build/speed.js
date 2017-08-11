"use strict";

var convert = require("./convert");

module.exports = {
  convert: convert({
    imperial: "mi/h",
    "km/h": "km/h",
    metric: "km/h",
    "mi/h": "mi/h"
  })
};
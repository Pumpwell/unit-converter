"use strict";

var convert = require("./convert");

module.exports = {
  convert: convert({
    dan: "daN",
    imperial: "lbf",
    lbf: "lbf",
    metric: "daN",
    n: "N"
  })
};
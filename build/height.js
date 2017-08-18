"use strict";

var convert = require("./convert");

module.exports = {
  convert: convert({
    cm: "cm",
    ft: "ft",
    fttvd: "ft",
    imperial: "ft",
    m: "m",
    metric: "m",
    mtvd: "m"
  })
};
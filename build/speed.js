"use strict";

var math = require("mathjs");
var types = require("./types");

var units = {
  imperial: "miles/h",
  metric: "kilometers/h"
};

module.exports = {
  convert: function convert(_ref) {
    var _ref$from = _ref.from;
    var from = _ref$from === undefined ? types.metric : _ref$from;
    var _ref$to = _ref.to;
    var to = _ref$to === undefined ? types.metric : _ref$to;
    var _ref$value = _ref.value;
    var value = _ref$value === undefined ? 0 : _ref$value;

    from = units[from.toLocaleLowerCase()];
    to = units[to.toLocaleLowerCase()];

    if (!from || !to) throw new Error("Conversion from " + from + " to " + to + " unknown");
    if (from === to) return value;

    return math.unit(value, from).toNumber(to);
  }
};
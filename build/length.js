"use strict";

var math = require("mathjs");
var types = require("./types");

var units = {
  imperial: "in",
  metric: "mm"
};

module.exports = {
  convert: function convert(_ref) {
    var _ref$from = _ref.from,
        from = _ref$from === undefined ? types.metric : _ref$from,
        _ref$to = _ref.to,
        to = _ref$to === undefined ? types.metric : _ref$to,
        _ref$value = _ref.value,
        value = _ref$value === undefined ? 0 : _ref$value;

    from = units[from.toLocaleLowerCase()];
    to = units[to.toLocaleLowerCase()];

    if (!from || !to) throw new Error("Conversion from " + from + " to " + to + " unknown");
    if (from === to) return value;

    return math.unit(value, from).toNumber(to);
  }
};
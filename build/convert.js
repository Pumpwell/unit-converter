"use strict";

var math = require("mathjs");
var types = require("./types");

module.exports = function (units) {
  return function (_ref) {
    var _ref$from = _ref.from,
        from = _ref$from === undefined ? types.metric : _ref$from,
        _ref$to = _ref.to,
        to = _ref$to === undefined ? types.metric : _ref$to,
        _ref$value = _ref.value,
        value = _ref$value === undefined ? 0 : _ref$value;

    var f = units[from.toLocaleLowerCase()];
    var t = units[to.toLocaleLowerCase()];

    if (!f || !t) throw new Error("Conversion from " + from + " to " + to + " unknown");
    if (f === t) return value;

    return math.unit(value, f).toNumber(t);
  };
};
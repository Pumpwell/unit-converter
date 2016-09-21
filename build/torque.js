"use strict";

var types = require("./types");

module.exports = {
  convert: function convert(_ref) {
    var _ref$from = _ref.from;
    var from = _ref$from === undefined ? types.metric : _ref$from;
    var _ref$to = _ref.to;
    var to = _ref$to === undefined ? types.metric : _ref$to;
    var _ref$value = _ref.value;
    var value = _ref$value === undefined ? 0 : _ref$value;

    var conversion = 0.7375621492772654;

    from = from.toLocaleLowerCase();
    to = to.toLocaleLowerCase();

    if (from === to) return value;
    if (from === types.metric && to === types.imperial) return value * conversion;
    if (from === types.imperial && to === types.metric) return value / conversion;

    throw new Error("Conversion from " + from + " to " + to + " unknown");
  }
};
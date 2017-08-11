"use strict";

var types = require("./types");

var units = {
  "bbl/d": types.imperial,
  imperial: types.imperial,
  "m3/d": types.metric,
  metric: types.metric
};

module.exports = {
  convert: function convert(_ref) {
    var _ref$from = _ref.from,
        from = _ref$from === undefined ? types.metric : _ref$from,
        _ref$to = _ref.to,
        to = _ref$to === undefined ? types.metric : _ref$to,
        _ref$value = _ref.value,
        value = _ref$value === undefined ? 0 : _ref$value;

    var conversion = 6.28981;
    var f = units[from.toLowerCase()];
    var t = units[to.toLowerCase()];

    if (!f || !t) throw new Error("Conversion from " + from + " to " + to + " unknown");
    if (f === types.metric && t === types.imperial) return value * conversion;
    if (f === types.imperial && t === types.metric) return value / conversion;

    return value;
  }
};
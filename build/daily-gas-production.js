"use strict";

var types = require("./types");

var CUBIC_METER_PER_DAY = "m3/d";
var THOUSAND_CUBIC_METERS_PER_DAY = "e3m3/d";
var CUBIC_FEET_PER_DAY = "cf/d";
var THOUSAND_CUBIC_FEET_PER_DAY = "Mcf/d";

module.exports = {
  convert: function convert(_ref) {
    var _ref$from = _ref.from,
        from = _ref$from === undefined ? CUBIC_METER_PER_DAY : _ref$from,
        _ref$to = _ref.to,
        to = _ref$to === undefined ? THOUSAND_CUBIC_METERS_PER_DAY : _ref$to,
        _ref$value = _ref.value,
        value = _ref$value === undefined ? 0 : _ref$value;


    if (from === to) return value;

    if (from === CUBIC_METER_PER_DAY) {
      if (to === THOUSAND_CUBIC_METERS_PER_DAY) return value / 1000;
      if (to === CUBIC_FEET_PER_DAY) return value * 35.314666213;
      if (to === THOUSAND_CUBIC_FEET_PER_DAY) return value * 35.314666213 / 1000;
    }

    if (from === THOUSAND_CUBIC_METERS_PER_DAY) {
      if (to === CUBIC_METER_PER_DAY) return value * 1000;
      if (to === CUBIC_FEET_PER_DAY) return value * 35314.666213;
      if (to === THOUSAND_CUBIC_FEET_PER_DAY) return value * 35.314666213;
    }

    if (from === CUBIC_FEET_PER_DAY) {
      if (to === CUBIC_METER_PER_DAY) return value * 0.028316847;
      if (to === THOUSAND_CUBIC_METERS_PER_DAY) return value * 0.028316847 / 1000;
      if (to === THOUSAND_CUBIC_FEET_PER_DAY) return value / 1000;
    }

    if (from === THOUSAND_CUBIC_FEET_PER_DAY) {
      if (to === CUBIC_METER_PER_DAY) return value * 28.316847;
      if (to === THOUSAND_CUBIC_METERS_PER_DAY) return value * 28.316847 / 1000;
      if (to === CUBIC_FEET_PER_DAY) return value * 1000;
    }

    throw new Error("Conversion from " + from + " to " + to + " unknown");
  }
};
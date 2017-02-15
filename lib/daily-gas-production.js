const CUBIC_METER_PER_DAY = "m3/d";
const THOUSAND_CUBIC_METERS_PER_DAY = "e3m3/d";
const CUBIC_FEET_PER_DAY = "cf/d";
const THOUSAND_CUBIC_FEET_PER_DAY = "Mcf/d";

module.exports = {
  convert({from = CUBIC_METER_PER_DAY, to = THOUSAND_CUBIC_METERS_PER_DAY, value = 0}) {
    if (from === to) return value;

    if (from === CUBIC_METER_PER_DAY) {
      if (to === THOUSAND_CUBIC_METERS_PER_DAY) return value / 1000;
      if (to === CUBIC_FEET_PER_DAY) return value * 35.314666213;
      if (to === THOUSAND_CUBIC_FEET_PER_DAY) return (value * 35.314666213) / 1000;
    }

    if (from === THOUSAND_CUBIC_METERS_PER_DAY) {
      if (to === CUBIC_METER_PER_DAY) return value * 1000;
      if (to === CUBIC_FEET_PER_DAY) return value * 35314.666213;
      if (to === THOUSAND_CUBIC_FEET_PER_DAY) return value * 35.314666213;
    }

    if (from === CUBIC_FEET_PER_DAY) {
      if (to === CUBIC_METER_PER_DAY) return value * 0.028316847;
      if (to === THOUSAND_CUBIC_METERS_PER_DAY) return (value * 0.028316847) / 1000;
      if (to === THOUSAND_CUBIC_FEET_PER_DAY) return value / 1000;
    }

    if (from === THOUSAND_CUBIC_FEET_PER_DAY) {
      if (to === CUBIC_METER_PER_DAY) return value * 28.316847;
      if (to === THOUSAND_CUBIC_METERS_PER_DAY) return (value * 28.316847) / 1000;
      if (to === CUBIC_FEET_PER_DAY) return value * 1000;
    }

    throw new Error(`Conversion from ${from} to ${to} unknown`);
  }
};

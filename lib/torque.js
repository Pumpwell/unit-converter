const types = require("./types");

const units = {
  "ft-lb": types.imperial,
  imperial: types.imperial,
  nm: types.metric,
  metric: types.metric,
};

module.exports = {
  convert({from = types.metric, to = types.metric, value = 0}) {
    const conversion = 0.7375621492772654;
    const f = units[from.toLowerCase()];
    const t = units[to.toLowerCase()];

    if (!f || !t) throw new Error(`Conversion from ${from} to ${to} unknown`);
    if (f === types.metric && t === types.imperial) return value * conversion;
    if (f === types.imperial && t === types.metric) return value / conversion;

    return value;
  }
};

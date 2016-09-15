const types = Object.freeze({
  imperial: "imperial",
  metric: "metric",
});

module.exports = {
  convert({from = types.metric, to = types.metric, value = 0}) {
    const conversion = 0.7375621492772654;

    from = from.toLocaleLowerCase();
    to = to.toLocaleLowerCase();

    if (from === to) return value;
    if (from === types.metric && to === types.imperial) return value * conversion;
    if (from === types.imperial && to === types.metric) return value / conversion;

    throw new Error(`Conversion from ${from} to ${to} unknown`);
  },

  types
};

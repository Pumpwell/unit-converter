const math = require("mathjs");
const types = require("./types");

const units = {
  imperial: "in",
  metric: "mm",
};

module.exports = {
  convert({from = types.metric, to = types.metric, value = 0}) {
    from = units[from.toLocaleLowerCase()];
    to = units[to.toLocaleLowerCase()];

    if (!from || !to) throw new Error(`Conversion from ${from} to ${to} unknown`);
    if (from === to) return value;

    return math.unit(value, from).toNumber(to);
  }
};

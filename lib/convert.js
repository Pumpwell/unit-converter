const math = require("mathjs");
const types = require("./types");

module.exports = (units) => {
  return ({from = types.metric, to = types.metric, value = 0}) => {
    const f = units[from.toLocaleLowerCase()];
    const t = units[to.toLocaleLowerCase()];

    if (!f || !t) throw new Error(`Conversion from ${from} to ${to} unknown`);
    if (f === t) return value;

    return math.unit(value, f).toNumber(t);
  };
};

const math = require("mathjs");
const types = require("./types");

module.exports = ({from = types.celsius, to = types.celsius, value = 0}) => math.unit(value, types[from.toLocaleLowerCase()]).to(types[to.toLocaleLowerCase()]);

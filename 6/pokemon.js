const _ = require('lodash')

const defaultFactor = 1;

const getDefenceFactor = types => {
  const defenceFactor = type => {
    if (!type) return {}
    return Object.assign({}, type.resistance, type.weakness)
  }

  return _.mergeWith(defenceFactor(types[0]), defenceFactor(types[1]), (obj, src) => {
    obj = (_.isNumber(obj) ? obj : defaultFactor);
    src = (_.isNumber(src) ? src : defaultFactor);
    return obj * src
  });
};

const pokemon = (...types) => {
  return {
    getWeakness: () => {
      return _.pickBy(getDefenceFactor(types), value => value > defaultFactor)
    },
    getResistance: () => {
      return _.pickBy(getDefenceFactor(types), value => value < defaultFactor)
    }
  }
}

module.exports = {pokemon}
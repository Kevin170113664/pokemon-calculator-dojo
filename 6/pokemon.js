const _ = require('lodash')

const defaultFactor = 1;
const reverseFactorMapping = {
  0: 2,
  2: 0.5,
  0.5: 2,
  1: 1
}

const getDefenceFactor = (types, reverse) => {
  const reverseFactor = defenceFactor => {
    const newDefenceFactor = {}
    _.each(defenceFactor, (factor, type) => newDefenceFactor[type] = reverseFactorMapping[factor])
    return newDefenceFactor
  }

  const getDefenceFactor = type => {
    if (!type) return {}

    if (reverse) {
      return Object.assign({}, reverseFactor(type.resistance), reverseFactor(type.weakness))
    }

    return Object.assign({}, type.resistance, type.weakness)
  }

  return _.mergeWith(getDefenceFactor(types[0]), getDefenceFactor(types[1]), (obj, src) => {
    obj = (_.isNumber(obj) ? obj : defaultFactor);
    src = (_.isNumber(src) ? src : defaultFactor);
    return obj * src
  });
};

const pokemon = (...types) => {
  return {
    getWeakness: (reverse = false) => {
      return _.pickBy(getDefenceFactor(types, reverse), value => value > defaultFactor)
    },
    getResistance: () => {
      return _.pickBy(getDefenceFactor(types), value => value < defaultFactor)
    }
  }
}

module.exports = {pokemon}
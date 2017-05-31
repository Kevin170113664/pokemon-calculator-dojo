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

  const getSingleTypeDefenceFactor = type => {
    if (!type) return {}

    if (reverse) {
      return Object.assign({}, reverseFactor(type.resistance), reverseFactor(type.weakness))
    }

    return Object.assign({}, type.resistance, type.weakness)
  }

  return _.mergeWith(getSingleTypeDefenceFactor(types[0]), getSingleTypeDefenceFactor(types[1]), (firstFactor, secondFactor) => {
    firstFactor = (_.isNumber(firstFactor) ? firstFactor : defaultFactor);
    secondFactor = (_.isNumber(secondFactor) ? secondFactor : defaultFactor);
    return firstFactor * secondFactor
  });
};

const pokemon = (...types) => {
  return {
    getWeakness: (reverse = false) => {
      return _.pickBy(getDefenceFactor(types, reverse), value => value > defaultFactor)
    },
    getResistance: (reverse = false) => {
      return _.pickBy(getDefenceFactor(types, reverse), value => value < defaultFactor)
    }
  }
}

module.exports = {pokemon}
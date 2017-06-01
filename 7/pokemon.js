const _ = require('lodash')

const defaultFactor = 1
const reverseMapping = {
  0.5: 2,
  2: 0.5,
  0: 2,
  1: 1
}
const getDefenceFactor = (types, reverse = false) => {
  const reverseFactor = defenceFactor => {
    const newFactor = {}
    _.each(defenceFactor, (factor, type) => newFactor[type] = reverseMapping[factor])
    return newFactor
  }

  const getSingleTypeDefence = type => {
    if (!type) return {}

    if (reverse) {
      return Object.assign({}, reverseFactor(type.resistance), reverseFactor(type.weakness))
    }

    return Object.assign({}, type.resistance, type.weakness)
  }

  return _.mergeWith(getSingleTypeDefence(types[0]), getSingleTypeDefence(types[1]), (obj, src) => {
    obj = _.isNumber(obj) ? obj : defaultFactor
    src = _.isNumber(src) ? src : defaultFactor
    return obj * src
  })
}

const pokemon = (...types) => {
  return {
    getWeakness: (reverse = false) => {
      return _.pickBy(getDefenceFactor(types, reverse), factor => factor > defaultFactor)
    },
    getResistance: (reverse = false) => {
      return _.pickBy(getDefenceFactor(types, reverse), factor => factor < defaultFactor)
    }
  }
}

module.exports = {pokemon}
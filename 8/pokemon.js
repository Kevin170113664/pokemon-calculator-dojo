const _ = require('lodash')

const getDefence = (types, reverse) => {
  const getSingleTypeDefence = function (type) {
    if (!type) return {}

    const reverseMapping = {
      0.5: 2,
      2: 0.5,
      0: 2,
      1: 1
    }

    const reverseFactor = defenceFactor => {
      const newFactor = {}
      _.each(defenceFactor, (factor, type) => newFactor[type] = reverseMapping[factor])
      return newFactor
    }

    if (reverse) {
      return Object.assign({}, reverseFactor(type.weakness), reverseFactor(type.resistance))
    }

    return Object.assign({}, type.weakness, type.resistance)
  }

  return _.mergeWith(getSingleTypeDefence(types[0]), getSingleTypeDefence(types[1]), (obj, src) => {
    obj = _.isNumber(obj) ? obj : 1
    src = _.isNumber(src) ? src : 1
    return obj * src
  })
}

const pokemon = (...types) => {
  return {
    getWeakness: (reverse = false) => {
      return _.pickBy(getDefence(types, reverse), factor => factor > 1)
    },
    getResistance: (reverse = false) => {
      return _.pickBy(getDefence(types, reverse), factor => factor < 1)
    }
  }
}

module.exports = {pokemon}
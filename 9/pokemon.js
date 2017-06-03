const _ = require('lodash')

const defaultFactor = 1
const getDefenceFactor = (types, reverse = false) => {
  const singleTypeDefenceFactor = type => {
    if (!type) return {}

    if (reverse) {
      const reverseMapping = {
        1: 1,
        0.5: 2,
        2: 0.5,
        0: 2
      }

      const reverseFactor = (defenceFactor) => {
        const newFactor = {}
        _.each(defenceFactor, (factor, type) => newFactor[type] = reverseMapping[factor])
        return newFactor
      }

      return Object.assign({}, reverseFactor(type.weakness), reverseFactor(type.resistance))
    }

    return Object.assign({}, type.weakness, type.resistance)
  }

  return _.mergeWith(singleTypeDefenceFactor(types[0]), singleTypeDefenceFactor(types[1]), (obj, src) => {
    obj = _.isNumber(obj) ? obj : defaultFactor;
    src = _.isNumber(src) ? src : defaultFactor;
    return obj * src
  })
}

const pokemon = (...types) => {
  return {
    getWeakness: () => {
      return _.pickBy(getDefenceFactor(types), factor => factor > defaultFactor)
    },
    getResistance: () => {
      return _.pickBy(getDefenceFactor(types), factor => factor < defaultFactor)
    },
    getReverseWeakness: () => {
      return _.pickBy(getDefenceFactor(types, true), factor => factor > defaultFactor)
    }
  }
}

module.exports = {pokemon}
const _ = require('lodash')

const defaultFactor = 1
let getDefenceFactor = function (types, isReverse = false) {
  let _getSingleTypeDefenceFactor = (type) => {
    if (!type) return {}
    const reverseMapping = {
      0.5: 2,
      0: 2,
      1: 1,
      2: 0.5
    }

    if (isReverse) {
      const _reverseFactor = (defenceFactor) => {
        const newFactor = {}
        _.each(defenceFactor, (factor, type) => newFactor[type] = reverseMapping[factor])
        return newFactor
      }

      return Object.assign({}, _reverseFactor(type.resistance), _reverseFactor(type.weakness))
    }

    return Object.assign({}, type.resistance, type.weakness)
  }

  return _.mergeWith(_getSingleTypeDefenceFactor(types[0]), _getSingleTypeDefenceFactor(types[1]),
    (obj, src) => {
      obj = _.isNumber(obj) ? obj : defaultFactor
      src = _.isNumber(src) ? src : defaultFactor
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
    },
    getReverseResistance: () => {
      return _.pickBy(getDefenceFactor(types, true), factor => factor < defaultFactor)
    }
  }
}

module.exports = {pokemon}
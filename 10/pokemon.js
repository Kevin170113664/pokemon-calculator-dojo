const _ = require('lodash')

const defaultFactor = 1
let getDefenceFactor = function (types) {
  let _getSingleTypeDefenceFactor = (type) => {
    if (!type) return {}
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
    }
  }
}

module.exports = {pokemon}
const _ = require('lodash')

const defaultFactor = 1
const getDefenceFactor = types => {
  const singleTypeDefenceFactor = type => {
    if (!type) return {}
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
    }
  }
}

module.exports = {pokemon}
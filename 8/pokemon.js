const _ = require('lodash')

const getDefence = types => {
  const getSingleTypeDefence = function (type) {
    if (!type) return {}
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
    getWeakness: () => {
      return _.pickBy(getDefence(types), factor => factor > 1)
    },
    getResistance: () => {
      return _.pickBy(getDefence(types), factor => factor < 1)
    }
  }
}

module.exports = {pokemon}
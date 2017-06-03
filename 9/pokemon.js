const _ = require('lodash')

const pokemon = (...types) => {
  return {
    getWeakness: () => {
      const singleTypeDefenceFactor = type => {
        if (!type) return {}
        return Object.assign({}, type.weakness, type.resistance)
      }

      const defenceFactor = () => {
        return _.mergeWith(singleTypeDefenceFactor(types[0]), singleTypeDefenceFactor(types[1]), (obj, src) => {
          obj = _.isNumber(obj) ? obj : 1;
          src = _.isNumber(src) ? src : 1;
          return obj * src
        })
      }

      return _.pickBy(defenceFactor(), factor => factor > 1)
    },
    getResistance: () => {
      return types[0].resistance
    }
  }
}

module.exports = {pokemon}
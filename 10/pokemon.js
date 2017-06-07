const _ = require('lodash')

const pokemon = (...types) => {
  return {
    getWeakness: () => {
      let _getSingleTypeDefenceFactor = (type) => {
        if (!type) return {}
        return Object.assign({}, type.resistance, type.weakness)
      }

      const defenceFactor = _.mergeWith(_getSingleTypeDefenceFactor(types[0]), _getSingleTypeDefenceFactor(types[1]),
        (obj, src) => {
          obj = _.isNumber(obj) ? obj : 1
          src = _.isNumber(src) ? src : 1
          return obj * src
        })

      return _.pickBy(defenceFactor, factor => factor > 1)
    },
    getResistance: () => {
      let _getSingleTypeDefenceFactor = (type) => {
        if (!type) return {}
        return Object.assign({}, type.resistance, type.weakness)
      }

      const defenceFactor = _.mergeWith(_getSingleTypeDefenceFactor(types[0]), _getSingleTypeDefenceFactor(types[1]),
        (obj, src) => {
          obj = _.isNumber(obj) ? obj : 1
          src = _.isNumber(src) ? src : 1
          return obj * src
        })

      return _.pickBy(defenceFactor, factor => factor < 1)
    }
  }
}

module.exports = {pokemon}
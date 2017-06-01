const _ = require('lodash')

const pokemon = (...types) => {
  return {
    getWeakness: () => {
      const getSingleTypeDefence = type => {
        if (!type) return {}
        return Object.assign({}, type.resistance, type.weakness)
      }

      const getDefence = () => {
        return _.mergeWith(getSingleTypeDefence(types[0]), getSingleTypeDefence(types[1]), (obj, src) => {
          obj = _.isNumber(obj) ? obj : 1
          src = _.isNumber(src) ? src : 1
          return obj * src
        })
      }

      return _.pickBy(getDefence(), factor => factor > 1)
    },
    getResistance: () => {
      const getSingleTypeDefence = type => {
        if (!type) return {}
        return Object.assign({}, type.resistance, type.weakness)
      }

      const getDefence = () => {
        return _.mergeWith(getSingleTypeDefence(types[0]), getSingleTypeDefence(types[1]), (obj, src) => {
          obj = _.isNumber(obj) ? obj : 1
          src = _.isNumber(src) ? src : 1
          return obj * src
        })
      }

      return _.pickBy(getDefence(), factor => factor < 1)
    }
  }
}

module.exports = {pokemon}
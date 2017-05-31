const _ = require('lodash')

const pokemon = (...types) => {
  return {
    getWeakness: () => {
      const defenceFactor = type => {
        return Object.assign({}, type.resistance, type.weakness)
      }

      const defence = _.mergeWith(defenceFactor(types[0]), defenceFactor(types[1]), (obj, src) => {
        obj = (_.isNumber(obj) ? obj : 1);
        src = (_.isNumber(src) ? src : 1);
        return obj * src
      })

      return _.pickBy(defence, value => value > 1)
    },
    getResistance: () => {
      return type.resistance
    }
  }
}

module.exports = {pokemon}
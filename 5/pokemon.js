const _ = require('lodash')

const pokemon = (...types) => {
  return {
    getWeakness: () => {
      let defenceFactor = _.mergeWith(Object.assign({}, types[0].weakness, types[0].resistance), Object.assign({}, types[1].weakness, types[1].resistance), (objective, source) => {
        let objectiveFactor = (_.isNumber(objective) ? objective : 1 );
        let sourceFactor = (_.isNumber(source) ? source : 1 );
        return objectiveFactor * sourceFactor
      });

      return _.pickBy(defenceFactor, value => {
        return value > 1
      })
    },
    getResistance: () => {
      return type.resistance
    }
  }
}

module.exports = {pokemon}
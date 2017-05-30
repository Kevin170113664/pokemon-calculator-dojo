const _ = require('lodash')

const pokemon = (...types) => {
  return {
    getWeakness: () => {
      let defaultFactor = 1;

      let getDefenceFactor = (type) => {
        if (!type) return {}
        return Object.assign({}, type.weakness, type.resistance);
      };

      let defenceFactor = _.mergeWith(getDefenceFactor(types[0]), getDefenceFactor(types[1]), (objective, source) => {
        let objectiveFactor = (_.isNumber(objective) ? objective : defaultFactor);
        let sourceFactor = (_.isNumber(source) ? source : defaultFactor);
        return objectiveFactor * sourceFactor
      });

      return _.pickBy(defenceFactor, value => {
        return value > defaultFactor
      })
    },
    getResistance: () => {
      return types[0].resistance
    }
  }
}

module.exports = {pokemon}
const _ = require('lodash')

let defaultFactor = 1;
const defenceFactor = (types) => {

  let getDefenceFactor = (type) => {
    if (!type) return {}
    return Object.assign({}, type.weakness, type.resistance);
  };

  let defenceFactor = _.mergeWith(getDefenceFactor(types[0]), getDefenceFactor(types[1]), (objective, source) => {
    let objectiveFactor = (_.isNumber(objective) ? objective : defaultFactor);
    let sourceFactor = (_.isNumber(source) ? source : defaultFactor);
    return objectiveFactor * sourceFactor
  });

  return defenceFactor;
}

const pokemon = (...types) => {
  return {
    getWeakness: () => {
      return _.pickBy(defenceFactor(types), value => {
        return value > defaultFactor
      })
    },
    getResistance: () => {
      return _.pickBy(defenceFactor(types), value => {
        return value < defaultFactor
      })
    }
  }
}

module.exports = {pokemon}
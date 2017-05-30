const _ = require('lodash');

let defaultFactor = 1;
const defenceFactor = (types, reverse = false) => {

  const reverseMapping = {
    0.5: 2,
    0: 2,
    1: 1,
    2: 0.5
  };

  let getDefenceFactor = (type) => {
    if (!type) return {};

    if (reverse) {
      const reverseFactor = defenceFactor => {
        const newFactor = {};
        _.each(defenceFactor, (factor, type) => newFactor[type] = reverseMapping[factor]);
        return newFactor
      };
      return Object.assign({}, reverseFactor(type.weakness), reverseFactor(type.resistance))
    }

    return Object.assign({}, type.weakness, type.resistance);
  };

  return _.mergeWith(getDefenceFactor(types[0]), getDefenceFactor(types[1]), (objective, source) => {
    let objectiveFactor = (_.isNumber(objective) ? objective : defaultFactor);
    let sourceFactor = (_.isNumber(source) ? source : defaultFactor);
    return objectiveFactor * sourceFactor
  });
};

const pokemon = (...types) => {
  return {
    getWeakness: (reverse = false) => {
      return _.pickBy(defenceFactor(types, reverse), value => {
        return value > defaultFactor
      })
    },
    getResistance: (reverse = false) => {
      return _.pickBy(defenceFactor(types, reverse), value => {
        return value < defaultFactor
      })
    }
  }
};

module.exports = {pokemon};
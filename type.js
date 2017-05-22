const _ = require('lodash');

module.exports = {
    fire: {
        isSuperEffectiveTo: (type) => type.toString() === 'grass',
        toString: () => 'fire'
    },
    water: {
        isSuperEffectiveTo: (type) => type.toString() === 'fire',
        isNotEffectiveTo: (types) => _.isEqual(types.map((type) => type.toString()) , ['grass', 'water']),
        toString: () => 'water'
    },
    grass: {
        isSuperEffectiveTo: (type) => type.toString() === 'water',
        toString: () => 'grass'
    }
};
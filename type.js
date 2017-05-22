const _ = require('lodash');

module.exports = {
    fire: {
        isSuperEffectiveTo: (type) => type.toString() === 'grass',
        toString: () => 'fire'
    },
    water: {
        isSuperEffectiveTo: (type) => type.toString() === 'fire',
        isNotEffectiveTo: (types) => _.every(types, type => _.includes(['grass', 'water'], type.toString())),
        toString: () => 'water'
    },
    grass: {
        isSuperEffectiveTo: (type) => type.toString() === 'water',
        toString: () => 'grass'
    }
};
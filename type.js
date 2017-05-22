const _ = require('lodash');

module.exports = {
    fire: {
        isSuperEffectiveTo: (type) => type.toString() === 'grass',
        isNotEffectiveTo: (types) => _.every(types, type => _.includes(['fire', 'water'], type.toString())),
        toString: () => 'fire'
    },
    water: {
        isSuperEffectiveTo: (type) => type.toString() === 'fire',
        isNotEffectiveTo: (types) => _.every(types, type => _.includes(['grass', 'water'], type.toString())),
        toString: () => 'water'
    },
    grass: {
        isSuperEffectiveTo: (type) => type.toString() === 'water',
        isNotEffectiveTo: (types) => _.every(types, type => _.includes(['grass', 'fire'], type.toString())),
        toString: () => 'grass'
    }
};
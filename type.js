const _ = require('lodash');

const notEffectiveChecker = (types, notEffectiveTypes) => _.every(types, type => _.includes(notEffectiveTypes, type.toString()));

module.exports = {
    fire: {
        isSuperEffectiveTo: (type) => type.toString() === 'grass',
        isNotEffectiveTo: (types) => notEffectiveChecker(types, ['fire', 'water']),
        toString: () => 'fire'
    },
    water: {
        isSuperEffectiveTo: (type) => type.toString() === 'fire',
        isNotEffectiveTo: (types) => notEffectiveChecker(types, ['grass', 'water']),
        toString: () => 'water'
    },
    grass: {
        isSuperEffectiveTo: (type) => type.toString() === 'water',
        isNotEffectiveTo: (types) => notEffectiveChecker(types, ['grass', 'fire']),
        toString: () => 'grass'
    }
};
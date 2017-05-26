// const _ = require('lodash');

const calculateDefenceFactor = ({types, isWeakness, isResistance, isReverse}) => {
    const defenceFactors = _.map(types, type => {
        if (_.isEmpty(type.resistance) || _.isEmpty(type.weakness))return {};

        let resistance = type.resistance;
        let weakness = type.weakness;
        if (isReverse) {
            resistance = reverse(type.resistance);
            weakness = reverse(type.weakness)
        }

        return Object.assign({}, resistance, weakness);
    });

    const DEFAULT_FACTOR = 1;
    const defenceFactor = _.mergeWith(defenceFactors[0], defenceFactors[1], (objFactor, srcFactor) =>
        (_.isNumber(objFactor) ? objFactor : DEFAULT_FACTOR) * (_.isNumber(srcFactor) ? srcFactor : DEFAULT_FACTOR)
    );

    if (isWeakness) {
        return _.pickBy(defenceFactor, factor => factor > DEFAULT_FACTOR)
    } else if (isResistance) {
        return _.pickBy(defenceFactor, factor => factor < DEFAULT_FACTOR)
    }
};

const reverse = defenceFactor => {
    const reverseMapping = {
        0: 2,
        0.5: 2,
        1: 1,
        2: 0.5
    };

    const reverseFactor = {};
    _.each(defenceFactor, (factor, type) => reverseFactor[type] = reverseMapping[factor]);
    return reverseFactor
};

const pokemon = types => {
    return {
        types,
        getWeakness: (isReverse = false) => {
            return calculateDefenceFactor({types, isWeakness: true, isReverse});
        },
        getResistance: (isReverse = false) => {
            return calculateDefenceFactor({types, isResistance: true, isReverse});
        }
    }
}

// module.exports = {pokemon}
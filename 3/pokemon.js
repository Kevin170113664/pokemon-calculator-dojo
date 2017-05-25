const _ = require('lodash');

const calculateDefenceFactor = ({types, isWeakness, isResistance}) => {
    const defenceFactors = _.map(types, type => {
        if (_.isEmpty(type.resistance) || _.isEmpty(type.weakness))return {};
        return Object.assign({}, type.resistance, type.weakness);
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

module.exports = {
    pokemon: types => {
        return {
            types,
            getWeakness: () => {
                return calculateDefenceFactor({types, isWeakness: true});
            },
            getResistance: () => {
                return calculateDefenceFactor({types, isResistance: true});
            }
        }
    }
};
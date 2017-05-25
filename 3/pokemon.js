const _ = require('lodash');

module.exports = {
    pokemon: types => {
        return {
            types,
            getWeakness: () => {
                const defenceFactors = _.map(types, type => {
                    if (_.isEmpty(type.resistance) || _.isEmpty(type.weakness))return {};
                    return Object.assign(type.resistance, type.weakness);
                });

                const DEFAULT_FACTOR = 1;
                const defenceFactor = _.mergeWith(defenceFactors[0], defenceFactors[1], (objFactor, srcFactor) =>
                    (_.isNumber(objFactor) ? objFactor : DEFAULT_FACTOR) * (_.isNumber(srcFactor) ? srcFactor : DEFAULT_FACTOR)
                );

                return _.pickBy(defenceFactor, factor => factor > DEFAULT_FACTOR)
            }
        }
    }
};
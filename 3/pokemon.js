const _ = require('lodash');

module.exports = {
    pokemon: (types) => {
        return {
            types,
            getWeakness: () => {
                const defenceFactors = _.map(types, type => {
                    if (_.isEmpty(type.resistance) || _.isEmpty(type.weakness))return {};
                    return Object.assign(type.resistance, type.weakness);
                });

                const defenceFactor = _.mergeWith(defenceFactors[0], defenceFactors[1], (objFactor, srcFactor) =>
                    (_.isNumber(objFactor) ? objFactor : 1) * (_.isNumber(srcFactor) ? srcFactor : 1)
                );

                return _.pickBy(defenceFactor, factor => factor > 1)
            }
        }
    }
};
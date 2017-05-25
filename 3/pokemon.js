const _ = require('lodash');

module.exports = {
    pokemon: (types) => {
        return {
            types,
            getWeakness: () => {
                let weakness = {};

                _.each(types, type => Object.assign(weakness, type.weakness));

                return weakness
            }
        }
    }
};
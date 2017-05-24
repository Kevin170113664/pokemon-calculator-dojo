const _ = require('lodash');

const type = {
    grass: {name: 'grass'},
    fire: {name: 'fire'},
    water: {name: 'water'},
    flying: {name: 'flying'},
    rock: {name: 'rock'},
    electric: {name: 'electric'},
    ground: {name: 'ground'},
    bug: {name: 'bug'},
    dark: {name: 'dark'},
    ghost: {name: 'ghost'},
    psychic: {name: 'psychic'},
    ice: {name: 'ice'},
    fighting: {name: 'fighting'}
};

type.grass.weakness = [type.fire];

type.fire.weakness = [type.water, type.rock];
type.fire.resistance = [type.grass, type.fire, type.ice];

type.water.weakness = [type.grass];

type.flying.weakness = [type.electric, type.rock, type.ice];
type.flying.resistance = [type.grass, type.ground, type.bug, type.fighting];

type.electric.weakness = [type.ground];

type.psychic.weakness = [type.bug, type.dark, type.ghost];

const pokemon = ({name, type1, type2}) => {
    return {
        name,
        type1,
        type2,
        getWeakness: () => {
            const resistance = _.uniqBy(_.concat(type1.resistance, type2.resistance), 'name');
            const weakness = _.uniqBy(_.concat(type1.weakness, type2.weakness), 'name');

            _.remove(weakness, weakness => _.includes(resistance, weakness));

            return _.map(weakness, weakness => weakness.name)
        }
    }
};

module.exports = {type, pokemon};
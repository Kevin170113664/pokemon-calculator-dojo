const assert = require('assert');
const _ = require('lodash');
const {type, pokemon} = require('./weakness-calculator');

describe('weakness calculator', function () {
    it('should calculate weakness for composite types like raichu-alola', function () {
        const raichu_alola = pokemon({type1: type.electric, type2: type.psychic});

        const weakness = raichu_alola.getWeakness();

        assert.deepEqual(_.difference(weakness, ['ground', 'bug', 'dark', 'ghost']), [])
    });

    it('should calculate weakness for composite types with complementary types', function () {
        const charizard = pokemon({type1: type.fire, type2: type.flying});

        const weakness = charizard.getWeakness();

        assert.deepEqual(_.difference(weakness, ['electric', 'rock', 'water']), []);
    });
});
const assert = require('assert');
const {type} = require('./pokemon-type');
const {pokemon} = require('./pokemon');

describe('weakness calculator', function () {
    it('should calculate weakness for single type pokemon', function () {
        const charmander = pokemon([type.fire]);

        assert.deepEqual(charmander.getWeakness(), {water: 2, ground: 2, rock: 2})
    });

    it('should not calculate weakness for invalid type', function () {
        const invalidPokemon = pokemon([]);

        assert.deepEqual(invalidPokemon.getWeakness(), {})
    });
});
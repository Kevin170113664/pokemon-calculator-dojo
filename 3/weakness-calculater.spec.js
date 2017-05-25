const assert = require('assert');
const {type} = require('./pokemon-type');
const {pokemon} = require('./pokemon');

describe('weakness calculator', function () {
    it('should calculate weakness for single type pokemon', function () {
        const charmander = pokemon([type.fire]);

        assert.deepEqual(charmander.getWeakness(), {water: 2, ground: 2, rock: 2})
    });

    it('should not calculate weakness for invalid type', function () {
        let invalidPokemon = pokemon(undefined);
        assert.deepEqual(invalidPokemon.getWeakness(), {});

        invalidPokemon = pokemon(null);
        assert.deepEqual(invalidPokemon.getWeakness(), {});

        invalidPokemon = pokemon([]);
        assert.deepEqual(invalidPokemon.getWeakness(), {});

        invalidPokemon = pokemon(['hah']);
        assert.deepEqual(invalidPokemon.getWeakness(), {});

        invalidPokemon = pokemon({});
        assert.deepEqual(invalidPokemon.getWeakness(), {})
    });
});
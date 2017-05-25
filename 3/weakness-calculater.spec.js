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

    it('should calculate weakness for composite types pokemon', function () {
        const charizard = pokemon([type.fire, type.flying]);

        assert.deepEqual(charizard.getWeakness(), {water: 2, rock: 4, electric: 2})
    });

    it('should calculate resistance for composite types pokemon', function () {
        const charizard = pokemon([type.fire, type.flying]);

        assert.deepEqual(charizard.getResistance(), {
            bug: 0.25,
            grass: 0.25,
            fire: 0.5,
            fighting: 0.5,
            ground: 0,
            steel: 0.5,
            fairy: 0.5
        })
    });

    it('should calculate weakness for composite types pokemon in reverse battle', function () {
        const charizard = pokemon([type.fire, type.flying]);

        assert.deepEqual(charizard.getWeakness(true), {
            bug: 4,
            grass: 4,
            fire: 2,
            fighting: 2,
            steel: 2,
            fairy: 2
        })
    });

    it('should calculate resistance for composite types pokemon in reverse battle', function () {
        const charizard = pokemon([type.fire, type.flying]);

        assert.deepEqual(charizard.getResistance(true), {water: 0.5, rock: 0.25, electric: 0.5})
    });
});
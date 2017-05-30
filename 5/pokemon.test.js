const assert = require('assert')
const {pokemon} = require('./pokemon')
const {type} = require('./pokemon-type')

describe('pokemon calculator', () => {

  it('should calculate single type pokemon weakness', function () {
    const Pikachu = pokemon(type.electric)

    assert.deepEqual(Pikachu.getWeakness(), {
      ground: 2
    })
  });

  it('should calculate single type pokemon resistance', function () {
    const Pikachu = pokemon(type.electric)

    assert.deepEqual(Pikachu.getResistance(), {
      flying: 0.5,
      electric: 0.5,
      steel: 0.5
    })
  });

  it('should calculate composite type pokemon weakness', function () {
    const Charizard = pokemon(type.fire, type.flying)

    assert.deepEqual(Charizard.getWeakness(), {
      rock: 4,
      electric: 2,
      water: 2
    })
  });

  it('should calculate composite type pokemon resistance', function () {
    const Charizard = pokemon(type.fire, type.flying)

    assert.deepEqual(Charizard.getResistance(), {
      ground: 0,
      fire: 0.5,
      fighting: 0.5,
      bug: 0.25,
      grass: 0.25,
      fairy: 0.5,
      steel: 0.5,
    })
  });

  it('should not calculate weakness when type is invalid', function () {
    let somePokemon = pokemon()
    assert.deepEqual(somePokemon.getResistance(), {})

    somePokemon = pokemon(undefined)
    assert.deepEqual(somePokemon.getResistance(), {})

    somePokemon = pokemon(null)
    assert.deepEqual(somePokemon.getResistance(), {})

    somePokemon = pokemon('some string')
    assert.deepEqual(somePokemon.getResistance(), {})
  });

  it('should calculate composite type pokemon weakness in reverse battle', function () {
    const Charizard = pokemon(type.fire, type.flying)

    assert.deepEqual(Charizard.getWeakness(true), {
      fire: 2,
      fighting: 2,
      bug: 4,
      grass: 4,
      fairy: 2,
      steel: 2
    })
  });
});
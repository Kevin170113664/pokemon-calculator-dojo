const assert = require('assert')
const {pokemon} = require('./pokemon')
const {type} = require('./pokemon-type')

describe('pokemon calculator', () => {

  it('should calculate single type pokemon weakness', function () {
    const Pikachu = pokemon(type.electric)
    assert.deepEqual(Pikachu.getWeakness(), {ground: 2})

    const Eevee = pokemon(type.normal)
    assert.deepEqual(Eevee.getWeakness(), {fighting: 2})
  });

  it('should calculate single type pokemon resistance', function () {
    const Pikachu = pokemon(type.electric)
    assert.deepEqual(Pikachu.getResistance(), {flying: 0.5, electric: 0.5, steel: 0.5})

    const Eevee = pokemon(type.normal)
    assert.deepEqual(Eevee.getResistance(), {ghost: 0})
  });

  it('should calculate composite type pokemon weakness', function () {
    const Charizard = pokemon(type.fire, type.flying)

    assert.deepEqual(Charizard.getWeakness(), {rock: 4, electric: 2, water: 2})
  });

  it('should calculate composite type pokemon resistance', function () {
    const Charizard = pokemon(type.fire, type.flying)

    assert.deepEqual(Charizard.getResistance(), {
      ground: 0,
      grass: 0.25,
      bug: 0.25,
      fighting: 0.5,
      fire: 0.5,
      fairy: 0.5,
      steel: 0.5
    })
  });

  it('should calculate composite type pokemon weakness in reverse battle', function () {
    const Charizard = pokemon(type.fire, type.flying)

    assert.deepEqual(Charizard.getWeakness(true), {
      grass: 4,
      bug: 4,
      fighting: 2,
      fire: 2,
      fairy: 2,
      steel: 2
    })
  });
});
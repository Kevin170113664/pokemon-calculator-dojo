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

  it('should calculate composite types pokemon weakness', function () {
    const Charizard = pokemon(type.fire, type.flying)

    assert.deepEqual(Charizard.getWeakness(), {rock: 4, electric: 2, water: 2})
  });

  it('should calculate composite types pokemon resistance', function () {
    const Charizard = pokemon(type.fire, type.flying)

    assert.deepEqual(Charizard.getResistance(), {
      fire: 0.5,
      steel: 0.5,
      bug: 0.25,
      grass: 0.25,
      fairy: 0.5,
      ground: 0,
      fighting: 0.5
    })
  });

  it('should calculate composite types pokemon weakness in reverse battle', function () {
    const Charizard = pokemon(type.fire, type.flying)

    assert.deepEqual(Charizard.getWeakness(true), {
      fire: 2,
      steel: 2,
      bug: 4,
      grass: 4,
      fairy: 2,
      fighting: 2
    })
  });

  it('should calculate composite types pokemon resistance in reverse battle', function () {
    const Charizard = pokemon(type.fire, type.flying)

    assert.deepEqual(Charizard.getResistance(true), {
      rock: 0.25,
      electric: 0.5,
      water: 0.5
    })
  });

});
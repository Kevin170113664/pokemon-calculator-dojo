const assert = require('assert')
const {pokemon} = require('./pokemon')
const {type} = require('./pokemon-type')

describe('pokemon calculator', () => {

  it('should calculate single type pokemon weakness', () => {
    const Pikachu = pokemon(type.electric)
    assert.deepEqual(Pikachu.getWeakness(), {ground: 2})

    const Eevee = pokemon(type.normal)
    assert.deepEqual(Eevee.getWeakness(), {fighting: 2})
  });

  it('should calculate single type pokemon resistance', () => {
    const Pikachu = pokemon(type.electric)
    assert.deepEqual(Pikachu.getResistance(), {electric: 0.5, flying: 0.5, steel: 0.5})

    const Eevee = pokemon(type.normal)
    assert.deepEqual(Eevee.getResistance(), {ghost: 0})
  });

  it('should calculate composite types pokemon weakness', () => {
    const Charizard = pokemon(type.fire, type.flying)

    assert.deepEqual(Charizard.getWeakness(), {rock: 4, electric: 2, water: 2})
  });

  it('should calculate composite types pokemon resistance', () => {
    const Charizard = pokemon(type.fire, type.flying)

    assert.deepEqual(Charizard.getResistance(), {
      ground: 0,
      bug: 0.25,
      grass: 0.25,
      fighting: 0.5,
      steel: 0.5,
      fairy: 0.5,
      fire: 0.5
    })
  });

  it('should calculate composite types pokemon weakness in reverse battle', () => {
    const Charizard = pokemon(type.fire, type.flying)

    assert.deepEqual(Charizard.getReverseWeakness(), {
      bug: 4,
      grass: 4,
      fighting: 2,
      steel: 2,
      fairy: 2,
      fire: 2
    })
  });

  it('should calculate composite types pokemon resistance in reverse battle', () => {
    const Charizard = pokemon(type.fire, type.flying)

    assert.deepEqual(Charizard.getReverseResistance(), {
      rock: 0.25,
      electric: 0.5,
      water: 0.5
    })
  });
});
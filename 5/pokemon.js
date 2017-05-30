const pokemon = (type) => {
  return {
    getWeakness: () => {
      return type.weakness
    },
    getResistance: () => {
      return type.resistance
    }
  }
}

module.exports = {pokemon: pokemon}
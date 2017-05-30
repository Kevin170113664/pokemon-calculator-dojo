const pokemon = (type) => {
  return {
    getWeakness: () => {
      return type.weakness
    }
  }
}

module.exports = {pokemon: pokemon}
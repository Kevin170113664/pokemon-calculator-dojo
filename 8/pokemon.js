const pokemon = (type) => {
  return {
    getWeakness: () => {
      return {ground: 2}
    }
  }
}

module.exports = {pokemon}
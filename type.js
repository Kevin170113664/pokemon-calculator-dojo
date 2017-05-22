module.exports = {
    fire: {
        name: 'fire',
        isWeakTo: function (type) {
            return type.name === 'water'
        }
    },
    water: {
        name: 'water',
        isWeakTo: function (type) {
            return type.name === 'grass'
        }
    },
    grass: {
        name: 'grass',
        isWeakTo: function (type) {
            return type.name === 'fire'
        }
    }
};
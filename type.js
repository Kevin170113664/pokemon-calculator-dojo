module.exports = {
    fire: {
        name: 'fire',
        isWeakTo: function (type) {
            return type.name === 'water'
        }
    },
    water: {
        name: 'water'
    }
};
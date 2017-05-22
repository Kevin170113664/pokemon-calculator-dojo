const weaknessCheck = function (type, targetType) {
    targetType = targetType.toString() || targetType;

    return type === 'fire' && targetType === 'water'
        || type === 'water' && targetType === 'grass'
        || type === 'grass' && targetType === 'fire'
};

module.exports = {
    fire: {
        isWeakTo: (type) => weaknessCheck('fire', type),
        toString: () => 'fire'
    },
    water: {
        isWeakTo: (type) => weaknessCheck('water', type),
        toString: () => 'water'
    },
    grass: {
        isWeakTo: (type) => weaknessCheck('grass', type),
        toString: () => 'grass'
    }
};
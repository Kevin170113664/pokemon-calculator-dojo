const type = {
    grass: {},
    fire: {},
    water: {}
};

type.grass.weakness = [type.fire];
type.fire.weakness = [type.water];
type.water.weakness = [type.grass];

module.exports = {type};
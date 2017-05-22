const assert = require('assert');
const type = require('./type');

describe('type weakness', function () {
    it('should weak to water when type is fire', function () {
        const fire = type.fire;
        const water = type.water;

        assert.equal(fire.isWeakTo(water), true);
    });

    it('should weak to grass when type is water', function () {
        const water = type.water;
        const grass = type.grass;

        assert.equal(water.isWeakTo(grass), true);
    });

    it('should weak to fire when type is grass', function () {
        const grass = type.grass;
        const fire = type.fire;

        assert.equal(grass.isWeakTo(fire), true);
    });
});
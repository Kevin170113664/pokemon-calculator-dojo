const assert = require('assert');
const type = require('./type');

describe('type weakness', function () {
    it('should weak to water move when type is fire', function () {
        const fire = type.fire;
        const water = type.water;

        assert.equal(fire.isWeakTo(water), true);
    });

    it('should weak to grass move when type is water', function () {
        const water = type.water;
        const grass = type.grass;

        assert.equal(water.isWeakTo(grass), true);
    });

    it('should weak to fire move when type is grass', function () {
        const grass = type.grass;
        const fire = type.fire;

        assert.equal(grass.isWeakTo(fire), true);
    });

    it('should be super effective to water type when move is grass type', function () {
        const grass = type.grass;
        const water = type.water;

        assert.equal(grass.isSuperEffectiveTo(water), true);
    });

    it('should be super effective to fire type when move is water type', function () {
        const fire = type.fire;
        const water = type.water;

        assert.equal(water.isSuperEffectiveTo(fire), true);
    });

    it('should be super effective to grass type when move is fire type', function () {
        const fire = type.fire;
        const grass = type.grass;

        assert.equal(fire.isSuperEffectiveTo(grass), true);
    });
});
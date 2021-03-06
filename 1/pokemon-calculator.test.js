const assert = require('assert');
const type = require('./type');

describe('move effect checker', function () {
    it('should not be effective to water or grass type when move is water type', function () {
        const water = type.water;
        const grass = type.grass;

        assert.equal(water.isNotEffectiveTo([grass, water]), true);
        assert.equal(water.isNotEffectiveTo([water, grass]), true);
    });

    it('should not be effective to fire or water type when move is fire type', function () {
        const water = type.water;
        const fire = type.fire;

        assert.equal(fire.isNotEffectiveTo([fire, water]), true);
        assert.equal(fire.isNotEffectiveTo([water, fire]), true);
    });

    it('should not be effective to grass or fire type when move is grass type', function () {
        const grass = type.grass;
        const fire = type.fire;

        assert.equal(grass.isNotEffectiveTo([fire, grass]), true);
        assert.equal(grass.isNotEffectiveTo([grass, fire]), true);
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
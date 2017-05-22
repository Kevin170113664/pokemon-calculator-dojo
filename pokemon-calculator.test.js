const assert = require('assert');
const type = require('./type');

describe('type weakness', function () {
    it('should weak to water for fire type', function () {
        const fire = type.fire;
        const water = type.water;

        assert.equal(fire.isWeakTo(water), true);
    });
});
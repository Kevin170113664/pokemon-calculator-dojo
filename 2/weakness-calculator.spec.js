const assert = require('assert');
const {type} = require('./weakness-calculator');

describe('weakness calculator', function () {
    it('should calculate weakness for 3 base types', function () {
        const grass = type.grass;
        const fire = type.fire;
        const water = type.water;

        assert.deepEqual(grass.weakness, [fire]);
        assert.deepEqual(fire.weakness, [water]);
        assert.deepEqual(water.weakness, [grass])
    });
});
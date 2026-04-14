import * as script from '../script.js';
import assert from 'assert';

describe('SpaceWord Logic', () => {
    it('getRandomInt(-42, 42) < 43 returns true', () => {
        assert.equal(script.getRandomInt(-42, 42) < 43, true);
    });

    it('getRandomInt(42, 42)returns 42', () => {
        assert.equal(script.getRandomInt(42, 42), 42);
    });
});

describe('rectIntersect', () => {
    it('rectintersect(1, 1, 2, 1, 4, 1, 1, 2) returns false', () => {
        assert.equal(script.rectIntersect(1, 1, 2, 1, 4, 1, 1, 2), false);
    });
    it('rectIntersect(1, 1, 5, 2, 4, 1, 1, 2) returns true', () => {
        assert.equal(script.rectIntersect(1, 1, 5, 2, 4, 1, 1, 2), true);
    });
});

describe('circleIntersect', () => {
    it('circleIntersect(3, 2, 1, 6, 1, 1.5) returns false', () => {
        assert.equal(script.circleIntersect(3, 2, 1, 6, 1, 1.5), false);
    });
    it('circleIntersect(3, 2, 1, 3, -2, 4) returns true', () => {
        assert.equal(script.circleIntersect(3, 2, 1, 3, -2, 4), true);
    });
});

describe('timeToString', () => {
    it('timeToString(123456789) returns "17:36:78"', () => {
        assert.equal(script.timeToString(123456789), "17:36:78");
    });
    it('timeToString("toto") should returns NaN formatted string', () => {
        const result = script.timeToString("toto")
        assert.equal(result, "NaN:NaN:NaN");
    });
});
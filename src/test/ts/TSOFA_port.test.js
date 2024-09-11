
import { TSOFA } from '../../../dist/TSOFA.js';
import { expect, test } from '@jest/globals';

test("radian to degree conversion", () => {
    expect(TSOFA.DR2D_$LI$()).toBe(57.29577951308232);
});
test("degree to radian conversion", () => {
    expect(TSOFA.DD2R_$LI$()).toBe(0.017453292519943295);
});

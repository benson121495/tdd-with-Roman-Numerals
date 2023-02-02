
import { toRoman } from "./roman";


test("I to 1", () => {
    expect(toRoman(1)).toBe('I');
});

test("II to 2", () => {
    expect(toRoman(2)).toBe('II');
});

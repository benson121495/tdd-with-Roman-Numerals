
import { changeToRoman } from "./roman";

describe("findNextNumber", () => {
    test("returns the next number after the given number in the array", () => {
        expect(changeToRoman(1)).toBe('I');

    });
});
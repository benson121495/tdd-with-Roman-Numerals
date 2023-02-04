
import { toRoman } from "./roman";


test("1 to I", () => {
    expect(toRoman(1)).toBe('I');
});

test("2 to II", () => {
    expect(toRoman(2)).toBe('II');
});

test("28 to XXVIII", () => {
    expect(toRoman(28)).toBe('XXVIII');
});

test("600 to DC", () => {
    expect(toRoman(28)).toBe('DC');
});

test("3724 to MMMDCCXXIV", () => {
    expect(toRoman(3724)).toBe('MMMDCCXXIV');
});

test("Check Null", () => {
    expect(toRoman(0)).toBe('Null');
});



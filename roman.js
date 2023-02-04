function toRoman(num) {
    var romanTable = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        600: 'DC',
        900: 'CM',
        1000: 'M'
    };

    if (num == 0) {
        return "Null";
    }

    let roman = '';
    const keys = Object.keys(romanTable);
    while (num > 0) {
        for (let i = keys.length - 1; i >= 0; i--) {
            let romanLetter = keys[i];
            if (num >= romanLetter) {
                while (num >= romanLetter) {
                    roman += romanTable[romanLetter];
                    num -= romanLetter;
                }
                keys.pop();
                break;
            }
        }
    }
  


    return roman;
}

module.exports = {toRoman};
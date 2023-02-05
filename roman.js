function toRoman(num) {
    const romanTable = {
        '_V': 5000,
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1,
    }

    if (num == 0) {
        return "Null";
    }

    let roman = '';

    // const keys = Object.keys(romanTable);
    // while (num > 0 ){
    //     for (let i = keys.length -1 ; i>=0; i--){
    //     let romanLetter = keys[i];
    //         while(num >= romanLetter){
    //             roman += romanTable[romanLetter];
    //             num -= romanLetter;
    //         }
    //         keys.pop();
    //         break;

    //     }
    // }
    for (const romanLetter in romanTable) {
        while (num >= romanTable[romanLetter]) {
            roman += romanLetter;
            num -= romanTable[romanLetter]
        }
    }


    return roman;
}

module.exports = { toRoman };
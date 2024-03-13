function serializeString(input) {
    let string = input[0];
    let letters = [];
    for (let i = 0; i < string.length; i++) {
        if (!letters.includes(string[i])) {
            letters.push(string[i]);
        }
    }
    while (letters.length > 0) {
        let symbol = letters.shift();
        let indexes = [];
        for (let i = 0; i < string.length; i++) {
            if (symbol === string[i]) {
                indexes.push(i);
            }
        }
        console.log(`${symbol}:${indexes.join('/')}`);
    }
}
serializeString(["abababa"]);
//serializeString(["avjavamsdmcalsdm"]);

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
        let indices = [];
        for (let i = 0; i < string.length; i++) {
            if (symbol === string[i]) {
                indices.push(i);
            }
        }
        console.log(`${symbol}:${indices.join('/')}`);
    }
}
serializeString(["abababa"]);
//serializeString(["avjavamsdmcalsdm"]);
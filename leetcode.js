// return true for numbers like 121, 131 becuase they are the same backwards and forward
//  false for numbers like 20, 30 e.t.c

function isPalindrome (x) {
    let s = x.toString();
    let array = []
    let length = s.length - 1
    for (let i = length; i>=0; i--) {
        array.push(s[i])
    }
    const reverse = parseInt(array.join(""))
    return x === reverse
};

// An algorithm to convert roman numerals to integers
function romanToInt(s) {
    const conversion = {
        'I': 1,
        'V': 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let sum = 0
    for (let i = 0; i < s.length; i++) {
        let current = conversion[s[i]];
        let next = conversion[s[i+1]]

        if (next && next > current) {
            sum += next - current
            i++
        } else {
            sum += current
        }
    }

    return sum
};
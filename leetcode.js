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

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 
function longestCommonPrefix(strings) {
    if (!strings || strings.length === 0) {
        return "";
    }

    let commonPrefix = strings[0];

    for (let i = 1; i < strings.length; i++) {
        const currentString = strings[i];
        let j = 0;

        // Compare characters of the common prefix and the current string
        while (j < commonPrefix.length && j < currentString.length && commonPrefix[j] === currentString[j]) {
            j++;
            console.log(commonPrefix.substring(0, j))
        }

        // Update the common prefix based on the comparison
        commonPrefix = commonPrefix.substring(0, j);

        if (commonPrefix === "") {
            break;
        }
    }

    return commonPrefix;
}

// Example usage:
const array_of_strings = ["flower", "flow", "flight"];
const result = longestCommonPrefix(array_of_strings);
console.log(result);

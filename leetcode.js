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
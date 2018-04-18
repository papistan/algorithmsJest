// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charObj = {}
    let max = 0
    let maxChar = '';

    for (let char of str) {
        charObj[char] ? charObj[char]++ : charObj[char] = 1
    }
   
    for (let char in charObj) {
        if (charObj[char] > max){
            max = charObj[char];
            maxChar = char
        }
    }

    return maxChar
}

module.exports = maxChar;

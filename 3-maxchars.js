// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {} // { a: 1, b: 1, c: 7, d: 1 }
    let max = 0
    let maxChar = ''

    for (let char of str) {
        if (charMap[char]) {
            charMap[char] = charMap[char] + 1
        } else {
            charMap[char] = 1
        }
    }

    for (const [key, value] of Object.entries(charMap)) { //[ [ 'a', 1 ], [ 'b', 1 ], [ 'c', 7 ], [ 'd', 1 ] ]
        // console.log(key, value);
        if (value > max) {
            max = value
            maxChar = key
        }
    }

    return maxChar
}

// Another easy way
function maxChar(str) {
    const charMap = {} // { a: 1, b: 1, c: 7, d: 1 }
    let max = 0
    let maxChar = ''

    for (let char of str) {
        if (charMap[char]) {
            charMap[char] = charMap[char] + 1
        } else {
            charMap[char] = 1
        }
    }

    for (let key in charMap) { //[ [ 'a', 1 ], [ 'b', 1 ], [ 'c', 7 ], [ 'd', 1 ] ]
        // console.log(key, value);
        if (charMap[key] > max) {
            max = charMap[key]
            maxChar = key
        }
    }

    return maxChar
}


console.log(maxChar("abcccccccd"));
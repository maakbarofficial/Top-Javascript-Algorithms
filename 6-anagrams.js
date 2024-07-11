// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('coding money', 'money coding') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanStr(str) {
    return str.toLowerCase().replace(/[\W]/g, '').split('').sort().join('')
}

function anagrams(stringA, stringB) {
    return cleanStr(stringA) === cleanStr(stringB)
}

// Another way of doing it
function charMap(str) {
    const charmap = {}   // { r: 1, a: 2, i: 1, l: 1, s: 1, f: 1, e: 1, t: 1, y: 1 }
    str = str.toLowerCase().replace(/[\W]/g, '')

    for (let char of str) {
        charmap[char] = ++charmap[char] || 1
    }

    return charmap
}

function anagrams(stringA, stringB) {
    const charMapA = charMap(stringA)
    const charMapB = charMap(stringB)

    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) return false

    for (let key in charMapA) {
        if (charMapA[key] !== charMapB[key]) return false
    }

    return true
}


console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
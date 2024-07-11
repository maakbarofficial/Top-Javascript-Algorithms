// --- Directions
// Given a string, return a new string with the reversed order of characters
// --- Examples
//   reverse('hi') === 'ih'
//   reverse('hello') === 'olleh'
//   reverse('CodingMoney') === 'yenoMgnidoC'

// One Way to do it
function reverse(str) {
    let reversed = ''

    for (let i = 0; i < str.length; i++) {
        // console.log(str.length);
        reversed = str[i] + reversed
    }

    return reversed
}

// Another way
function reverse(str) {
    let reversed = ''

    for (let char of str) {
        // console.log(str.length);
        reversed = char + reversed
    }

    return reversed
}

// One Another way
function reverse(str) {
    return str.split('').reverse().join('')
}

console.log(reverse("Ali"));

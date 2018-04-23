// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let poundCounter = 1
    let spaceCounter = n - poundCounter 
    for(let i=1;i<=n;i++){
        let stepStr = ' '.repeat(spaceCounter) + '#'.repeat(poundCounter) + ' '.repeat(spaceCounter)
        console.log(stepStr)
        poundCounter = poundCounter + 2
        spaceCounter--
    }
}

module.exports = pyramid;

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let finalValue = 0
  let prevChar = ''
  for(let i of s) {
    switch(i) {
        case 'I':
            finalValue += 1
            break
        case 'V':
            finalValue += prevChar === 'I' ? 3 : 5
            break
        case 'X':
            finalValue += prevChar === 'I' ? 8 : 10
            break
        case 'L':
            finalValue += prevChar === 'X' ? 30 : 50
            break
        case 'C':
            finalValue += prevChar === 'X' ? 80 : 100
            break
        case 'D':
            finalValue += prevChar === 'C' ? 300 : 500
            break
        case 'M':
            finalValue += prevChar === 'C' ? 800 : 1000
            break
    }
    prevChar = i
  }
  return finalValue
};
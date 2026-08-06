/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const PAIRS = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    const stack = []
    for(let i=0;i<s.length;i++) {
        if(PAIRS.hasOwnProperty(s[i])) stack.push(PAIRS[s[i]])
        else if(stack[stack.length-1] === s[i]) stack.pop()
        else return false
    }
    return stack.length === 0
};
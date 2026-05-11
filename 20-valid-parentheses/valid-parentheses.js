/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    const pairs = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    for(let l of s) {
        if(pairs[l]) stack.push(pairs[l])
        else if(stack[stack.length-1] === l) stack.pop()
        else stack.push(-1)
    }
    return stack.length === 0
};
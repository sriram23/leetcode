/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 !== 0) return false
    const pairs = {
        '[': ']',
        '(': ')',
        '{': '}'
    }
    const stack = []
    for(let l of s) {
        if(pairs[l])
           stack.push(pairs[l])
        else if(stack[stack.length-1] === l)
            stack.pop()
        else stack.push(-1)
    }
    return stack.length===0
};
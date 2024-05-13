/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    const stack = [];
    let keys = Object.keys(map);
    s.split('').forEach((v) => {
        if (keys.includes(v)) {
            stack.unshift(map[v]);
        } else if (v === stack[0]) {
            stack.shift()
        } else {
            // Inserting some value, in order to make the stack value non-empty
            stack.push(-1)
        }
    })
    return stack.length === 0
};
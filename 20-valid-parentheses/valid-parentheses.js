/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const PAIRS = {
        "{":"}",
        "[":"]",
        "(":")"
    }
    const stck = []
    for(let i=0;i<s.length;i++) {
        console.log(s[i], s.length)
        if(PAIRS.hasOwnProperty(s[i])) {
            stck.push(PAIRS[s[i]])
        } else{
            if(stck[stck.length-1] === s[i]){
                stck.pop()
            } else return false
        }
    }
    return stck.length === 0
};
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let sum = 0
    for(let i=0;i<s.length-1;i++) {
        const ascii = s[i].charCodeAt() - s[i+1].charCodeAt()
        sum += ascii > 0 ? ascii : ascii * -1
    }
    return sum
};
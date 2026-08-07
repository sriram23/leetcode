/**
 * @param {number} n
 * @return {boolean}
 */

const getNumber = (n) => {
    let res = 0
    while(n>0) {
        res += (n%10)*(n%10)
        n = Math.floor(n/10)
    }
    return res
}
var isHappy = function(n) {
    const temp = new Set()
    while(n !== 1) {
        if(temp.has(n)) return false
        temp.add(n)
        n = getNumber(n)
    }
    return true
};

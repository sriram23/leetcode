/**
 * @param {number} n
 * @return {boolean}
 */

const getNumber = (n) => {
    let res = 0
    while(n>0) {
        res += (n%10)**2
        n = Math.floor(n/10)
    }
    return res
}
var isHappy = function(n) {
    const temp = new Set()
    while(true) {
        if(n === 1) return true
        else if(temp.has(n)) return false
        temp.add(n)
        n = getNumber(n)
    }
};

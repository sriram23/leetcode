/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let i = 0
    while(i<32) {
        if(Math.pow(2, i) === n) return true
        if(Math.pow(2, i) > n) break
        i++
    }
    return false
};
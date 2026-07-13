/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false
    if(x<10) return true

    let original = x
    let modified = 0

    while(x>0) {
        const digit = x%10
        modified = modified * 10 + digit
        x = Math.floor(x/10)
    }

    return original === modified
};
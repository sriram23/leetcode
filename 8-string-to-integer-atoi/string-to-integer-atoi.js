/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const arr = []
    // To check if we get a number at all
    const trimmed = s.trim() // This will remove the space in starting and end
    for(let i=0; i<trimmed.length;i++) {
        /**
        This logic is bit complicated.
        1. If it is not an integer, break
        2. If we already not have an integer before and we are having + or -, then we are not breaking (In simple terms, if + or - in first char post trimming, we are allowing)
        3. If we have space in the middle, then we are breaking. 
         */
        if(!(trimmed[i] >= '0' && trimmed[i]<='9') && (trimmed[i] !== '-') && (trimmed[i] !== '+')){
            break
        }
        if(trimmed[i] === '-' && i !== 0 && trimmed[i-1] >='0' && trimmed[i-1] <='9') {
            break
        }
        if(trimmed[i] === '+' && i !== 0 && trimmed[i-1] >='0' && trimmed[i-1] <='9') {
            break
        }
        arr.push(trimmed[i])
    }
    const final = Number(arr.join("")) || 0

    // When range is exceeded
    if(final >= Math.pow(2,31)) {
        return Math.pow(2,31) - 1
    } else if(final < Math.pow(-2, 31)) {
        return Math.pow(-2, 31)
    }

    return final
};
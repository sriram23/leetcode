/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0
    let isNegative = x < 0
    if(isNegative)
        result = Number(x.toString().split("").splice(1).reverse().join("")) * -1
    else
        result = Number(x.toString().split("").reverse().join(""))
    const isOutOfRange = result <= Math.pow(-2,31) || result > (Math.pow(2,31) - 1)
    return isOutOfRange ? 0 : result
};
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
   while(num > 9) {
        num = Math.floor(num/10) + num%10
    }
    return num 
};
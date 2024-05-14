/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const ht = {}
    for (const i of nums) {
        ht[i] = ht[i] + 1 || 1
    }
    for (const key in ht) {
        if(ht[key] === 1) {
            return key
        }
    }
};
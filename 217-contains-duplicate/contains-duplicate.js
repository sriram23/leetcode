/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // return !(nums.length === new Set(nums).size)
    const map = new Map()
    for(let n of nums) {
        if(map.has(n)) return true
        map.set(n, true)
    }
    return false
};
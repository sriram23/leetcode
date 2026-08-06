/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Optimal solution
    const set = new Set()
    for(let n of nums) {
        if(set.has(n)) return true
        set.add(n)
    }
    return false
};
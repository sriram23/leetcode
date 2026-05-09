/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = {}
    for(let i=0;i<nums.length;i++) {
        if(!map[nums[i]]) map[nums[i]] = 0
        map[nums[i]] = map[nums[i]] + 1
    }
    for(let i in map) {
        if(map[i]>1) return true
    }
    return false
};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return !(nums.length === Array.from(new Set(nums)).length)
};
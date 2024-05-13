/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set([...nums]);
    console.log("Set length: " + set.size)
    return set.size !== nums.length
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const temp = Array.from(new Set(nums.slice()))
    for(let i=0;i<temp.length;i++) {
        nums[i] = temp[i]
    }
    temp.splice(temp.length, (nums.length - temp.length))
    return temp.length
};
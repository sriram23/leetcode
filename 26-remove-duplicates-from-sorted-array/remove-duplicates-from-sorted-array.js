/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const newArr = Array.from(new Set(nums))
    for(let i=0;i<newArr.length;i++) {
        nums[i] = newArr[i]
    }
    nums.splice(newArr.length, (nums.length - newArr.length))
    return nums.length
};
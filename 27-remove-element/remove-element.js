/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const newArr = nums.filter(n => n !== val)
    for(let i=0;i<newArr.length;i++) {
        nums[i] = newArr[i]
    }
    nums.splice(newArr.length, nums.length - newArr.length)
    return nums.length
};
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const withoutZeros = nums.filter(n => n !== 0)
    const zeros = nums.filter(n => n === 0)
    const newArr = [...withoutZeros, ...zeros]
    for(let i=0;i<nums.length;i++) {
        nums[i] = newArr[i]
    }
};
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  const withoutZeros = nums.filter(n => n != 0)
  for(let i=0;i<nums.length;i++) {
    if(i<withoutZeros.length) nums[i] = withoutZeros[i]
    else nums[i] = 0
  }
};
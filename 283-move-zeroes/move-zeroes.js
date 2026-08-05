/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // two pointer approach
    let w = 0
    // Rewriting the zeros with next number
    for(let i=0;i<nums.length;i++) {
        if(nums[i] !== 0) {
            nums[w] = nums[i]
            w++
        }
    }
    // Rewriting the last digits with zeros
    for(let i=w;i<nums.length;i++) {
        nums[i] = 0
    }
};
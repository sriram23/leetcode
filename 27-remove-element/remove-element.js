/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const finalArr = nums.filter(n => n !== val)
    for(let i=0;i<finalArr.length;i++) {
        nums[i] = finalArr[i]
    }
    nums.splice(finalArr.length, nums.length - finalArr.length)
    return nums.length
};
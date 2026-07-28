/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const withoutDuplicates = Array.from(new Set(nums)).sort((x, y) => x-y)
    console.log(withoutDuplicates)
    for(let i=0;i<withoutDuplicates.length;i++) {
        nums[i] = withoutDuplicates[i]
    }
    nums.splice(withoutDuplicates.length, nums.length - withoutDuplicates.length)
    return nums.length
};
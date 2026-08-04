/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // two pointer approach optimal approach
    let write = 1
    for(let read=1; read<nums.length; read++) {
        if(nums[read] !== nums[write-1]) {
            nums[write] = nums[read]
            write++
        }
    }
    return write
};

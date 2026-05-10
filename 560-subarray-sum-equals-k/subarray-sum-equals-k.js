/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0
    for(let i=0;i<nums.length;i++) {
        let dump = 0
        for(let j=i; j<nums.length;j++) {
            dump += nums[j]
            if(dump === k) count++
        }
    }
    return count
};
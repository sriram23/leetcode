/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map()
    for(let i=0;i<nums.length;i++) {
        if(map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1)
        else map.set(nums[i], 1)
    }
    const sorted = [...map.entries()].sort((x,y) => y[1] - x[1]).slice(0, k)
    return sorted.map(s => s[0])
};
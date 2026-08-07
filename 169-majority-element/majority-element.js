/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map()
    for(let n of nums) {
        map.set(n, (map.get(n) || 0) + 1)
    }
    return map.entries().reduce((int, acc) => int[1] > acc[1]?int:acc)[0]
};

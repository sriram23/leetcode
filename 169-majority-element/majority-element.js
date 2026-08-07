/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map()
    for(let n of nums) {
        if(map.has(n)) map.set(n, map.get(n)+1)
        else map.set(n, 1)
    }
    return map.entries().reduce((int, acc) => int[1] > acc[1]?int:acc)[0]
};
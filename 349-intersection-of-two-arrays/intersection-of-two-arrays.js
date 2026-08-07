/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const num1Set = new Set(nums1)
    const num2Set = new Set(nums2)
    const intersect = []
    for(let v of num1Set) {
        if(num2Set.has(v)) intersect.push(v)
    }
    return intersect
};
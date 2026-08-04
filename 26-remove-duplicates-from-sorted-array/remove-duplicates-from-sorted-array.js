/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // two pointer approach
    let readPointer = 0
    let writePointer = 0
    while(readPointer < nums.length) {
        if(readPointer === writePointer) {
            writePointer++
        } else if(nums[readPointer] === nums[writePointer]) {
            nums.splice(writePointer, 1)
            writePointer--
        } else {
            readPointer = writePointer
        }
    }
    return nums.length
};

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const arr = [[1]]
    for(let i=1;i<numRows;i++) {
        if(arr[i-1]) {
            const tArr = arr[i-1]
            const temp = [1]
            for(let j=0;j<tArr.length-1;j++) {
                temp.push(tArr[j] + tArr[j+1])
            }
            temp.push(1)
            arr.push(temp)
        }
    }
    return arr
};
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [[1]]
    for(let i=1;i<numRows;i++) {
        let prevRow = result[result.length-1]
        let newRow = [1]
        for(let j=0; j<prevRow.length-1; j++) {
            newRow.push(prevRow[j]+prevRow[j+1])
        }
        newRow.push(1)
        result.push(newRow)
    }
    return result
};
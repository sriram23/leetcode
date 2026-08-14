/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1]
    let prevRow = []
    let currRow = []
    for(let i=1;i<rowIndex+1;i++) {
        prevRow = currRow
        currRow = []
        currRow.push(1)
        for(let j=0;j<prevRow.length-1;j++) {
            currRow.push(prevRow[j] + prevRow[j+1])
        }
        currRow.push(1)
    }
    return currRow
};

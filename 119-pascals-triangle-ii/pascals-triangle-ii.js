/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const result = [[1]];
    for(let i=0; i<rowIndex; i++) {
        const prevRow = result[result.length-1];
        const newRow = [1]
        for(let j=0; j<prevRow.length-1; j++) {
            newRow.push(prevRow[j]+prevRow[j+1])
        }
        newRow.push(1)
        result.push(newRow)
    }
    return result[result.length-1]
};
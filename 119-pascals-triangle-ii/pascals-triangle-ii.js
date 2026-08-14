/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1]
    let row = []
    for(let i=1;i<rowIndex+1;i++) {
        const currRow = []
        currRow.push(1)
        for(let j=0;j<row.length-1;j++) {
            currRow.push(row[j] + row[j+1])
        }
        currRow.push(1)
        row = currRow
    }
    return row
};

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1]
    let pascalTriangle = [[1]]
    for(let i=1;i<rowIndex+1;i++) {
        const prevRow = pascalTriangle[i-1]
        const currRow = [1]
        for(let j=0;j<prevRow.length-1;j++) {
            currRow.push(prevRow[j] + prevRow[j+1])
        }
        currRow.push(1)
        pascalTriangle.push(currRow)
    }
    return pascalTriangle[rowIndex]
};
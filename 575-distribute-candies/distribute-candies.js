/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const varieties = Array.from(new Set(candyType))
    const nByTwo = varieties.slice(0, candyType.length/2)
    return nByTwo.length
};
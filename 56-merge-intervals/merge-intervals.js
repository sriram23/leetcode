/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const sortedIntervals = intervals.sort((x, y) => x[0] - y[0])
    const newArr = []
    let i=0
    while(i<sortedIntervals.length) {
        if(i !== sortedIntervals.length-1) {
            if(sortedIntervals[i][1] >= sortedIntervals[i+1][0]) {
                const newValue = [sortedIntervals[i][0], Math.max(sortedIntervals[i+1][1], sortedIntervals[i][1])]
                sortedIntervals.splice(i, 2, newValue)
            } else {
                i++
            }
        } else {
            i++
        }
    }
    return sortedIntervals
};
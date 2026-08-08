/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map()
    const finalArr = []
    for(let str of strs) {
        const sig = str.split("").sort().join("")
        if(map.has(sig)){
            map.get(sig).push(str)
        } else {
            map.set(sig, [str])
        }
    }
    for(let [key, value] of map.entries()) {
        finalArr.push(value)
    }
    return finalArr
};

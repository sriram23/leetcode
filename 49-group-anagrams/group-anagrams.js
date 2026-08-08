/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map()
    for(let str of strs) {
        const sig = str.split("").sort().join("")
        if(map.has(sig)){
            map.get(sig).push(str)
        } else {
            map.set(sig, [str])
        }
    }
    return [...map.values()]
};

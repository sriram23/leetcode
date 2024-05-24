/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const mapS = {}
    const mapT = {}
    for(let i=0;i<s.length;i++) {
        if(mapS[s[i]]) {
            if(mapS[s[i]] !== t[i]) return false
        } else {
            mapS[s[i]] = t[i]
        }
    }
    for(let i=0;i<t.length;i++) {
        if(mapT[t[i]]) {
            if(mapT[t[i]] !== s[i]) return false
        } else {
            mapT[t[i]] = s[i]
        }
    }
    return true
};
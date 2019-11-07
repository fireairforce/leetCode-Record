/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const mapper = {};
    let res = 0;
    let Swindows = [];
    for(let c of s) {
        if(mapper[c]){
            const delIndex = Swindows.findIndex(_c => _c === c);
            for(let i = 0;i<delIndex;i++){
                mapper[Swindows[i]] = false;
            } 
            Swindows = Swindows.slice(delIndex +1).concat(c);
        } else {
            if(Swindows.push(c)>res) {
                res = Swindows.length;
            }
        }
        mapper[c] = true;
    }
    return res;
};
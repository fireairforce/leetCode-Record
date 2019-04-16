/**
 * @param {number[]} deck
 * @return {boolean}
 */
//  思路其实就是求最小公约数
var hasGroupsSizeX = function (deck) {
    if(deck.length<=1){
        return false
    }else{
        deck.sort((a, b) => {
            return a - b; // 从小到大排序
        })
        let dst = [];
        let min = Number.MAX_SAFE_INTEGER,len = deck.length; // 当前操作系统下面最大的整数
        for (let i = 0, temp = []; i < len; i++) {
            temp.push(deck[i]);
            for (let j = i + 1; j < len-1; j++) {
                if (deck[i] === deck[j]) {
                    temp.push(deck[j]);
                } else {
                    if (min > temp.length) {
                        min = temp.length;
                    }
                    dst.push([].concat(temp)) // 这里直接push temp遍历dst的元素全部都是相同的
                    temp.length = 0; //清空数组
                    i = j-1;
                    break;
                }
            }
         }
        return dst.every(item=>{
            if(item.length%min===0){
                return true
            }
        })
    }
};
console.log(hasGroupsSizeX([0,0,0,0,0,1,1,2,3,4]));




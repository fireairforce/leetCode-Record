/**
 * @param {number[]} deck
 * @return {boolean}
 */
//  思路其实就是求相同数字数组数字的长度的与其最小长度的最大公因数不为1
var hasGroupsSizeX = function (deck) {
    let gcd = (a,b) =>{
        while(b){
           let t = b;
           b = a % b;
           a = t;    
        } 
        return a;
    }
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
            for (let j = i + 1; j <= len; j++) {
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
            if(gcd(item.length,min)!==1){
                return true;
            }
        })
    }
};
console.log(hasGroupsSizeX([1,1]));


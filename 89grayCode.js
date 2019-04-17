/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    let solve = (n) => {
        if (n===0) {
            return ['0']
        }
        else if (n === 1) {
            return ['0', '1']
        } else {
            let prev = solve(n - 1),
                len = prev.length,
                max = Math.pow(2,n)-1,
                result = [];  
            for(let i=0;i<len;i++){
               result[i] = `0${prev[i]}`;
               result[max - i] =`1${prev[i]}`           
            } 
            return result;     
        }
    }
    return solve(n).map(item=>{
        return parseInt(item,2);
    })
};
// console.log(grayCode(2));
// grayCode(3);     
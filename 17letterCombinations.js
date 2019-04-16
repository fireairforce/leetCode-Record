/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    //  建立一张数字到字符的映射表   
    let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    // 把字符串分割成一个数组
    let num = digits.split('');
    //  使用code来存储映射后的字符串,例如23=>['abc','def']
    let code = [];
    num.forEach((item) => {
        if (map[item]) {
            code.push(map[item])
        }
    })
    if (num.length <= 1) {
        return code[0] ? code[0].split('') : []
    } else {
        // 将数组结果两项两项的去进行组合
        let comb = (arr) => {
            // 临时变量用来保存前两个组合的结果
            let temp = [];
            let il = arr[0].length;
            let jl = arr[1].length;
            //  最外层的循环是遍历第一个元素，里层的循环是遍历第二个元素
            for (let i = 0; i < il; i++) {
                for (let j = 0; j < jl; j++) {
                    temp.push(`${arr[0][i]}${arr[1][j]}`);
                }
            }
            // splice方法表示从0开始删除了2个元素,然后temp是从0开始添加的一个元素
            arr.splice(0, 2, temp);
            if (arr.length > 1) { // 如果大于一递归去再次执行匹配
                comb(arr)
            } else { // 如果等于1就返回临时结果就可以了
                return temp;
            }
            return arr[0];
        }
        return comb(code)
    }

};
console.log(letterCombinations(''));
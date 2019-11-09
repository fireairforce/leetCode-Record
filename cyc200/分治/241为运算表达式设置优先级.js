/**
 * @param {string} input
 * @return {number[]}
 */
const a = {};
const opt = ['+','-','*'];
var diffWaysToCompute = function(input) {
    
};

// bfs用来回溯产生所有的可能性
const bfs = (str) => {
    if(a[str]) {
        return a[str];
    }
}

/*
输入: "2*3-4*5"
输出: [-34, -14, -10, -10, 10]
解释: 
(2*(3-(4*5))) = -34 
((2*3)-(4*5)) = -14 
((2*(3-4))*5) = -10 
(2*((3-4)*5)) = -10 
(((2*3)-4)*5) = 10
*/
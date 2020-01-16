/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
      let token = tokens[i];
      //   判断字符是不是数字
      if (!Number.isNaN(Number(token))) {
        stack.push(token);
      } else {
        let a = Number(stack.pop());
        let b = Number(stack.pop());
        if (token === "*") {
          stack.push(b * a);
        } else if (token === "/") {
          //   js的除法,这里处理一下
          stack.push(parseInt(b / a));
        } else if (token === "+") {
          stack.push(b + a);
        } else if (token === "-") {
          stack.push(b - a);
        }
      }
    }
    return stack.pop();
  };
  
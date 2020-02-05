// 判定表达式的优先级
const prio = (op) => {
  if (op === "*" || op === "/") {
    return 2;
  }
  if (op === "+" || op === "-") {
    return 1;
  }
  if (op === "(") {
    return 0;
  }
};
// 把中缀表达式转成后缀表达式
const transfer = (str) => {
  let stack = [];
  let tempStr = "";
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (!Number.isNaN(Number(str[i]))) {
      tempStr += str[i];
    } else {
      // 栈空入栈
      if (!stack.length) {
        stack.push(str[i]);
      } else if (str[i] === "(") {
        stack.push(str[i]);
      } else if (str[i] === ")") {
        // 把括号里面的数字加起来
        while (stack[stack.length - 1] !== "(") {
          tempStr += stack.pop();
        }
        // 左括号弹出来
        stack.pop();
      } else {
        // 栈顶部运算符优先级比当前运算符高，就弹出来
        while (prio(str[i]) <= prio(stack[stack.length - 1])) {
          tempStr += stack.pop();
          if (!stack.length) {
            break;
          }
        }
        stack.push(str[i]);
      }
    }
  }
  while (stack.length) {
    tempStr += stack.pop();
  }
  return tempStr;
};

// 计算后缀表达式的值
const evalRPN = (tokens) => {
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
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let temp = transfer(s.replace(/\s/g, ""));
  return evalRPN(temp);
};

// console.log(calculate("0-2147483647"));
// console.log(calculate("6*(7*9+(6+3)/3)+8"));

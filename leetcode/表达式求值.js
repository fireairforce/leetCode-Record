const solve = (str) => {
  let temp = transfer(str);
  console.log(temp);
  return evalRPN(temp);
};

const transfer = (str) => {
  const stack = [];
  let arr = [];
  for(let i = 0;i<str.length;i++) {
    if(str[i] === ')') {
      while(true) {
        let top = stack[stack.length - 1];
        stack.pop();
        if('(' !== top) {
          arr[arr.length] = top;
        } else {
          break;
        }
      }
    } else if(['-','+'].indexOf(str[i]) !== -1) {
      if(['*','/'].indexOf(stack[stack.length - 1]) !== -1) {
        while(['*','/'].indexOf(stack[stack.length - 1]) !== -1) {
          arr[arr.length] = stack[stack.length - 1];
          stack.pop();
        }
        arr[arr.length] = str[i];
      } else {
        stack.push(str[i]);
      }
    } else if(['*','/'].indexOf(stack[stack.length - 1] !== -1)) {
      stack.push(str[i]);
    } else {
      arr[arr.length] = str[i];
    }
  }
  return arr;
}

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

console.log(solve('1 + 1'));
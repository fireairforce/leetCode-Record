// 使用两个栈来实现一个队列
var stack1 = [];
function push(node)
{
    // write code here
   return stack1.push(node);
}
function pop()
{
    // write code here
    return stack1.shift();
}
module.exports = {
    push : push,
    pop : pop
};
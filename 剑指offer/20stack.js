let arr = [];

function push(node) {
    // write code here
    arr.push(node);
}

function pop() {
    // write code here
    arr.pop();
}

function top() {
    // write code here
    // return arr.length?arr[0]:"";
}

function min() {
    // write code here
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]<min) {
            min = arr[i]
        }
    }
    return min;
}
module.exports = {
    push: push,
    pop: pop,
    top: top,
    min: min
};
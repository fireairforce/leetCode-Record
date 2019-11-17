/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(root)
{
    // write code here
    let queue = [];
    let result = [];
    if(root === null) {
       return result;
    }
    let nextLevel = 0;
    queue.push(root);
    let toBePrinted = 1;
    let level = 0;
    let arr = [];
    while(queue.length){
        let temp = queue.shift();
        toBePrinted--;
        arr.push(temp.val);
        if(temp.right){
            queue.push(temp.right);
            nextLevel++;
        } 
        if(temp.left){
            queue.push(temp.left);
            nextLevel++;
        }
        if(toBePrinted==0){
            toBePrinted = nextLevel;
            nextLevel = 0;
            level++;
            if(level%2===0){
                arr.reverse();
            }
            result.push(arr);
            arr = [];
        }

    }
    return result;
}
module.exports = {
    Print : Print
};
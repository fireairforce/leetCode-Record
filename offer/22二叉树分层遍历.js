/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    // write code here
    let arr = [];
    let queue = [];
    if(!root){
        return [];
    }
    queue.push(root);
   while(queue.length){
       root = queue.shift();
       arr.push(root.val);
       if(root.left){
           queue.push(root.left);
       }
       if(root.right){
           queue.push(root.right);
       }
   }
   return arr;
}
module.exports = {
    PrintFromTopToBottom : PrintFromTopToBottom
};
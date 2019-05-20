 function TreeNode(x) {
     this.val = x;
     this.left = null;
     this.right = null;
 }
 var arr = [];

 function Serialize(pRoot) {
     // write code here
     if (!pRoot) {
         arr.push("$");
         return;
     }
     arr.push(pRoot.val);
     Serialize(pRoot.left);
     Serialize(pRoot.right);
 }

 function Deserialize(s) {
     // write code here
     if (!arr) {
         return arr;
     }
     if (arr.length < 1) {
         return null;
     }
     var root = null;
     var temp = arr.shift();
     if (typeof temp == 'number') {
         root = new TreeNode(temp);
         root.left = Deserialize(arr);
         root.right = Deserialize(arr);
     }
     return root;
 }
 module.exports = {
     Serialize: Serialize,
     Deserialize: Deserialize
 };
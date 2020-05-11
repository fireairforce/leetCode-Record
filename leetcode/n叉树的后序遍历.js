
function TreeNode(val, children) {
  this.val = val;
  this.children = children
}

var postorder = (root) => {
   const res = []
   function dfs (root) {
     if (!root) {
       return
     }
     if (root) {
       root.children.forEach(item => {
         dfs(item)
       })
       res.push(root.val)
     }
   }
   dfs(root)
   return res;
}
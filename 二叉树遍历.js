// 递归版本
// 后续遍历
function TreeNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

function TailInorder(root){
    if(root){
        TailInorder(root.left);
        TailInorder(root.right)
        console.log(root.val)        
    }
}
// 中序遍历
function MidInorder(root){
    if(root.left!==null){
        MidInorder(root.left);
    }
    if(root.right!==null){
        MidInorder(root.right);
    }
}

function deleteDuplicatie(pHead){
    if(pHead === null || pHead.next === null) {
        return pHead;
    }
    let p = pHead;
    if(pHead.val === p.next.val){
        p = p.next.next;
        while(p!==null&&p.val===pHead.val){
            p = p.next;
        }
        return deleteDuplicatie(p);
    } else {
        p = pHead.next;
        pHead.next = deleteDuplicatie(p);
        return pHead;
    }
}
// nav header aside footer article 标签
const isSameTree = (p,q) => {
    if(p===null && q===null) {
        return true;
    }
    if(p===null){
        return false;
    }
    if(q===null) {
        return false;
    }
    if(q.val === p.val) {
        return isSameTree(p.left,q.left) && isSameTree(p.right,q.right);
    } else {
        return false;
    }
}
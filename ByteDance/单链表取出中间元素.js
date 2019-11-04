let solve = (root) => {
    if(!root){
        return null;
    }
    let slow = root,fast = root,p = root;
    while(fast&&fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
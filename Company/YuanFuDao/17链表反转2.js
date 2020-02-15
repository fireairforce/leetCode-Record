var reverseList = (root) => {
    if(!root) {
        return;
    }
    let newHead;
    while(root) {
        let temp = root.next;
        root.next = newHead;
        newHead = root;
        root = temp;
    }
    return newHead;
}
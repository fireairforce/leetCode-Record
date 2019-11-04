const solve = (root) => {
    if(!root || !root.next) {
        return root;
    }
    let newHead ;
    while(head){
        let temp = head.next;
        head.next = newHead;
        newHead = head;
        head = temp;
    }
    return newHead;
}
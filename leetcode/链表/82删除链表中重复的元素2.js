const deleteItem = (head) => {
    if(!head || !head.next) {
        return head;
    }
    if(head.next && head.val === head.next.val) {
        while(head.next && head.val === head.next.val) {
            head = head.next;
        }
        return deleteItem(head.next);
    } else {
        head.next = deleteItem(head.next);
    }
    return head;
}
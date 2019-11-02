var reverseList = (root) => {
    if(!root || !root.next){
        return root;
    }
    // 递归反转 子链表
    let newReverseList = reverseList(root.next);
    // 获取到原来链表的第二个节点
    let newReverseListTail = root.next;
    // 调整原来头结点和第二个节点的指向
    newReverseListTail.next = root;
    root.next = null;
    return newReverseList;
}
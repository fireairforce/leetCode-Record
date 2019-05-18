function RandomListNode(x) {
    this.label = x;
    this.next = null;
    this.random = null;
}
function Clone(pHead) {
    // write code here
    if(pHead === null) {
        return;
    } 
    let node = new RandomListNode(pHead.label);
    node.random = pHead.random;
    node.next = Clone(pHead.next);
    return node;
}
module.exports = {
    Clone: Clone
};
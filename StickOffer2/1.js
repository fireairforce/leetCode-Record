function Find(target, array) {
    // write code here
    let flag = 0;
    array.forEach(item=>{
        if(item.indexOf(target)>-1){
           flag = 1;
        }
    })
    if(flag){
        return true;
    } return false;
}
module.exports = {
    Find: Find
};
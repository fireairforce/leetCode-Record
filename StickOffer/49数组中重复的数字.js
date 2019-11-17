function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    if(numbers.length<1){
        return false;
    } 
    let k = 0;
    numbers.map((item,index,self)=>{
        if(self.indexOf(item)!==index){
            duplication[k++] = item;
        }
    })
    return k===0?false:true;
}
module.exports = {
    duplicate : duplicate
};
function IsContinuous(numbers) {
    // write code here
    if(numbers.length<5){
        return false;
    }
    numbers.sort((a,b)=>a-b);
    let newArr = [];
    numbers.forEach((item) => {
        if (item!==0) {
            newArr.push(item);
        }
    })

    let newArrI = [...new Set(newArr)];
    if (newArr.length <= 1) {
        return true;
    } else {
        if (newArr[newArr.length - 1] - newArr[0] < 5 && newArrI.length === newArr.length) {
            return true;
        } else {
            return false;
        }
    }
}
// console.log(IsContinuous([1,3,2,6,4]));
module.exports = {
    IsContinuous: IsContinuous
};
function PrintMinNumber(numbers) {
    // write code here
    numbers.sort((a,b)=>{
        a = a.toString();
        b = b.toString();
        if(parseInt(a+b)>parseInt(b+a)){
            return 1;
        } else return -1;
    })
    return numbers.join('');
}
module.exports = {
    PrintMinNumber: PrintMinNumber
};
function FirstNotRepeatingChar(str) {
    // write code here
    if(!str){
        return -1;
    }
    let count = {};
    for (let i = 0; i < str.length; i++) {
        if (!count[str[i]]) {
            count[str[i]] = 1;
        } else {
            count[str[i]]++;
        }
    }
    for(let i=0;i<str.length;i++){
        if(count[str[i]]===1){
            return i;
        }
    }
}
// console.log(FirstNotRepeatingChar('google'));
module.exports = {
    FirstNotRepeatingChar: FirstNotRepeatingChar
};
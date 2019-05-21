function LeftRotateString(str, n) {
    // write code here
    if(!str){
        return "";
    }
   n = n%str.length;
   let str1 = str.slice(0,n);
   let str2 = str.slice(n,str.length); 
   let str3 = (str1.split('').reverse().join('')+str2.split('').reverse().join('')).split('').reverse().join('');
   return str3;
}
// console.log(LeftRotateString('abcXYZdef',3));
module.exports = {
    LeftRotateString: LeftRotateString
};
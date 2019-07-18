function convertToBinary(num) {
   var str = num.toString(2);
   if(str.length<8){
      var arr = str.split('');
      for(var i = 0;i<8-str.length;i++){
        arr.unshift(0)
      }
      return arr.join('');
   } 
   return str;
}
// console.log(convertToBinary(65));
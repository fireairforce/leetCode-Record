function jumpFloorII(number) {
    // write code here
   let f = [];
   f[1] = 1;
   for(let i =2;i<=number;i++){
       f[i] = 2*f[i-1]; 
   }
   return f[number];
}
// console.log(jumpFloorII(2));
module.exports = {
    jumpFloorII: jumpFloorII
};
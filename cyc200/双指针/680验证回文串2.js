/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
   s = [...s];    
   let i = 0,j=s.length - 1;
   while(i<j){
     if(s[i]!==s[j]){
       return judge(s,i,j-1) || judge(s,i+1,j); 
     }
     i++;
     j--;
   }
   return true;
};

let judge = (s,i,j) => {
   while(i<j){
     if(s[i++]!=s[j--]){
       return false;
     }
   }
   return true;
}

// console.log(validPalindrome("abca"));
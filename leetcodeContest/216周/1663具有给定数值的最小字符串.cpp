class Solution {
public:
    string getSmallestString(int n, int k) {
       string res(n, 'a');
       int index = n - 1;
       while (n > 0) {
           // 分三种情况贪心, 可以填z
           if (k - 26 > n - 1) {
               res[index--] = 'z';
               k-=26;
           } else if (k > n){
               res[index--] = 'a' + (k - n);
               k = n - 1;
           } else {
               res[index--] = 'a';
               k--;
           }
           n --;
       }
       return res;
    }
};
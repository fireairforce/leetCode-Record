class Solution {
public:
    int stoneGameVII(vector<int>& a) {
       int len = a.size();
       vector<int> s(len + 1);
       for (int i = 1;i<=len;i++) {
           s[i] = a[i - 1] + s[i - 1];
       }
       vector<vector<int>> f(len + 1, vector<int>(len + 1));
       for (int a = 2;a<=len;a++) {
           for (int i = 1;i + a - 1 <= len; i++) {
               int j = i + a - 1;
               f[i][j] = max(s[j] - s[i] - f[i + 1][j], s[j - 1] - s[i - 1] - f[i][j - 1]);
           }
       }
       return f[1][len];
    }
};
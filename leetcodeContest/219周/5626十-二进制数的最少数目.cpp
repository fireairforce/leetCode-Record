class Solution {
public:
    int minPartitions(string n) {
      int max = -1;
      for (int i = 0;n[i];i++) {
        if (n[i] - '0' >= max) {
          max = n[i] - '0';
        }
      }
      return max;
    }
};
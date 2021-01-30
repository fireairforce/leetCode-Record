#include<iostream>
#include<cstring>
#include<algorithm>

using namespace std;
int main () {
  int t;
  cin >> t;
  while (t--) {
    int n, k;
    cin >> n >> k;
    if (n == 1) {
      puts("ma la se mi no.1!");
      continue;
    }
    if (k >= n) {
      puts("yo xi no forever!");
      continue;
    }
    if ((n - 1) % (k + 1) == 0) {
      puts("ma la se mi no.1!");
    } else {
      puts("yo xi no forever!");
    }
  }
  return 0;
}
#include<iostream>
#include<cstring>
#include<cmath>

using namespace std;
const int mod = 998244353;

int main () {
  int t;
  cin >> t;
  while (t --) {
    int n, m;
    cin >> n >> m;
    if (n == 1 && m == 0) {
      cout << 2 << endl;
    }
    if (m == 0) {
      cout << n + 2 << endl;
    } else if (m == 1) {
      cout << (2 * n) % mod << endl;
    } else if (m == 2) {
      long long res = 2;
      for (int i = 0; i < n-1 ; i++){
        res = (res * 2) % mod;
      }
      cout << res << endl;
    }
  }
  return 0;
}
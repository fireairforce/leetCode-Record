#include<iostream>
#include<cstring>
#include<cmath>

using namespace std;
const int mod = 998244353;

long long f(int n, int m) {
  if (n == 0) {
    return 1;
  }
  if (m == 0 && n == 1) {
    return 2;
  }
  if (m == 0) {
    return n + 2;
  }
  return f(f(n-1, m), m - 1);
}

int main () {
  int t;
  cin >> t;
  while (t --) {
    int n, m;
    cin >> n >> m;
    cout << f(n, m) << endl;
  }
  return 0;
}
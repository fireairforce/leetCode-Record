#include<iostream>
#include<cstring>
#include<cmath>
#include<algorithm>
#include<cmath>
#include<map>
#include <unordered_map>

const int N = 1e5 + 7;
int a[N], s[N];

using namespace std;
int main () {
  int t;
  cin >> t;
  while (t --) {
    int n, k;
    cin >> n >> k;
    memset(a, 0, sizeof a);
    for (int i = 0; i < n; i++) {
      cin >> a[i];
    }
    map<int, int> mp;
    mp[0] = -1;
    int sum = 0;
    int res = -1;
    for (int i = 0; i< n;i++) {
      sum += a[i];
      sum %= k;
      if (mp.find(sum) != mp.end()) {
        if (i - mp[sum] > 1) {
          res = max(i - mp[sum], res);
        }
      } else {
        mp[sum] = i;
      }
    }
    cout << res << endl;
  }
  return 0;
}
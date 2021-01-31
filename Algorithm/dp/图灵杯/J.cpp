#include<iostream>
#include<iostream>
#include<cstring>
#include<cmath>

using namespace std;
const int N = 1000;
const int INF = 0x3f3f3f3f;
int g[N][N];
int st[N];
int n,m;
int b[N];

bool judge() {
  for (int i = 1; i<=n;i++) {
    if (st[i] != 1) {
      return false;
    }
  }
  return true;
}

int main () {
  memset(g, 0x3f, sizeof g);
  int ans = INF;
  cin >> n >> m;
  while (m --) {
    int a, b, c;
    cin >> a >> b >> c;
    g[a][b] = g[b][a] = min(g[a][b], c);
  }
  int k;
  cin >> k;
  while (k --) {
    int x;
    cin >> x;
    memset(st, 0, sizeof st);
    memset(b, 0, sizeof b);
    for (int i = 0; i < x; i++) {
      cin >> b[i];
    }
    int sum = 0;
    for (int i = 0; i <= x; i ++) {
      int prefix;
      int prefixSum = sum;
      if (i == 0) {
        prefix = 0;
        // 遍历一下起点可以达到的地方
       if (g[prefix][b[i]] != INF) {
         st[b[i]] ++;
         sum += g[prefix][b[i]];
       }
      } else if (i < x) {
        prefix = b[i-1];
        if (g[prefix][b[i]] != INF) {
         st[b[i]] ++;
         sum += g[prefix][b[i]];
       }
      } else if (i == x) {
        prefix = b[i-1];
        if (g[prefix][0] != INF) {
         sum += g[prefix][b[i]];
       }
      }
      if (prefixSum == sum) {
        sum = 0;
        break;
      }
    }
    bool isValid = judge();
    if (isValid && sum != 0) {
      ans = min(ans, sum);
    }
  }
  if (ans == INF) {
    cout << "-1" << endl;
  } else {
    cout << ans << endl;
  }
  return 0;
}
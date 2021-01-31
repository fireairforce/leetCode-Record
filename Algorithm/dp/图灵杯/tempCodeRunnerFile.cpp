#include<iostream>
#include<iostream>
#include<cstring>
#include<cmath>

using namespace std;
const int N = 310;
int h[N], w[N],e[N], ne[N], idx = 0;
int st[N];
int n,m;
int b[N];

void add (int a, int b, int c) {
  e[idx] = b, ne[idx] = h[a], w[idx] = c, h[a] = idx++;
}

bool judge() {
  for (int i = 1; i<=n;i++) {
    if (st[i] != 1) {
      return false;
    }
  }
  return true;
}

int main () {
  memset(h, -1, sizeof h);
  int ans = 0x3f3f3f3f;
  cin >> n >> m;
  while (m --) {
    int a, b, c;
    cin >> a >> b >> c;
    add(a, b, c);
    add(b ,a ,c);
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
      if (i == 0) {
        prefix = 0;
        st[0] ++;
        // 遍历一下起点可以达到的地方
        for (int j = h[0]; j != -1; j = ne[j]) {
          int k = e[j];
          if (k == b[i]) {
            sum += w[j];
            st[k] ++;
            break;
          }
        }
      } else if (i < x) {
        prefix = b[i-1];
        st[prefix]++;
        for (int j = h[prefix];j!=-1;j=ne[j]) {
          int k = e[j];
          if (k == b[i]) {
            sum += w[j];
            st[k] ++;
            break;
          }
        }
      } else if (i == x) {
        prefix = b[i-1];
        st[prefix]++;
        for (int j = h[prefix];j!=-1;j = ne[j]) {
          int k = e[j];
          if (k == 0) {
            sum += w[j];
            st[k] ++;
            break;
          }
        }
      }
    }
    cout << sum << endl;
    bool isValid = judge();
    if (isValid && sum != 0) {
      ans = min(sum, ans);
    }
    cout << ans << endl;
  }
  if (ans == 0x3f3f3f3f) {
    cout << -1 << endl;
  } else {
    cout << ans << endl;
  }
  return 0;
}
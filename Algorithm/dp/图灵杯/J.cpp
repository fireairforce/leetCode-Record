#include<iostream>
#include<iostream>
#include<cstring>
#include<cmath>

using namespace std;
const int N = 310;
int h[N], w[N],e[N], ne[N], idx;
int dist[N];
bool st[N];
int n,m;

void add (int a, int b, int c) {
  e[idx] = b, ne[idx] = h[a], w[idx] = c, h[a] = idx++;
}

int main () {
  memset(h, -1, sizeof h);
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
  }
  return 0;
}
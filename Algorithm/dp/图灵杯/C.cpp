#include<iostream>
#include<cstring>

using namespace std;
long long res = 0;
const int N = 1e5 + 10;
int arr[N];
int cnt[N];
int main () {
  int n;
  cin >> n;
  for (int i = 0; i < n; i++) {
    cin >> arr[i];
    cnt[i] = 1;
  }
  for (int i = 1;i <n ;i++) {
    if (arr[i] > arr[i-1]) {
      cnt[i] += cnt[i-1];
    }
  }
  for (int i = 0; i< n;i++) {
    res += cnt[i];
  }
  cout << res << endl;
  return 0;
}
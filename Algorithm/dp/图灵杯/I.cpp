#include<iostream>
#include<cstring>
#include<cmath>

using namespace std;
int main () {
  int t;
  cin >> t;
  while (t --) {
    int n;
    cin >> n;
    int sum = 1;
    bool flag = false;
    for (int i = 1; i < 15; i++) {
      sum += pow(2, i);
      if (n % sum == 0) {
        flag = true;
        break;
      }
    }
    if (flag) {
      cout << "YE5" << endl;
    } else {
      cout << "N0" << endl;
    }
  }
  return 0;
}
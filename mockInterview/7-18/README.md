### 四数字之和
```js
// 四数之和
// nums = [1, 0, -1, 0, -2, 2]，和 target = 0
// output is :[
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]
const solve = (arr, target) => {
  if (arr.length <= 3) {
    return []
  }
  arr = arr.sort()
  let len = arr.length
  let res = []
  for (let i = 0; i < len - 3; i++) {
    // 找第一个value
    for (let j = i; j < len - 2; j++) {
      left , right 
      nums[i] + j + left + right < target
      left ++ 
       > target 
       right --
    }
  }
  // 搞去重
  return res;
}

console.log(solve([1, 0, -1, 0, -2, 2], 0))


// diff 
// 单点

// 多点

// div 
// p 
```

### 最长回文子串
```js
// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为1000。
// ##### 示例 1：
// 输入: "babad"
//  输出: "bab"
//  注意: "aba"也是一个有效答案。
// ##### 示例 2：
// 输入: "cbbd"
//  输出: "bb"
// tips: 回文字符串：正读反读都一样

const judge = (str) => {
  let left = 0, right = str.length - 1;
  while (left <= right) {
    if (str[left] !== str[right]) {
      return false
    } else {
      left ++;
      right --;
    }
  }
  return true;
}

const solve = (str) => {
  if (str.length === 0) {
    return ''
  }
  let left = 0, right = str.length;
  let res = ''
  while (left < right) {
    if (judge(str.slice(left, right)) && right - left >= res.length) {
      // 构成
      res = str.slice(left, right)
    } else {
    }
  }
}

const solve = (s) => {
  let len = s.length
  let dp = Array(len).fill(0)
  for (let i = 0; i < len; i++) {
    dp[i] = []
  }
  let res = ''
  // dp[i][j] 表示下标i到下标j的最长回文子串
  // dp[i][j] = dp[]
  for (let i = s.length; i >= 0; i--) {
    dp[i] = []
    for (let j = i; j < s.length; j++) {
      if (j === i) {
        dp[i][j] = true
      } else if (j - i === 1 && s[j] === s[i]) {
        dp[i][j] = true
      } else if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true
      }
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.slice(i, j + 1)
      }
    }
  }
  return res;
}

console.log(solve('babad'));
console.log(solve('cbbd'));
```

### 二叉搜索树转双向链表
```js
// 二叉搜索树转双向链表
// 先用中序遍历把结果搞出来
function ListNode(val) {
  this.val = val
  this.next = null
  this.prev = null
}
const solve = () => {
  let res = []
  const zx = (root) => {
    if (!root) {
      return
    }
    zx(root.left)
    res.push(root.val)
    zx(root.right)
  }
  zx(root)
  // res = []
  let newHead = new ListNode(-1)
  // 后走
  let head = newHead.next
  // 记录前面
  let prev = newHead
  for (let i = 0; i < res.length - 1; i++) {
    head.val = res[i]
    head.next = new ListNode(res[i + 1])
    head.prev = prev
    head = head.next
    prev = prev.next
  }
  return newHead.next
}
```

### 其他

```js


// didmout
useEffect (() => {
  return () => {}
}, [])

// ts -> js?
// Partical<Type>

// interface Type {
//   a: String
//   b: Number;
// }
// Omit <Type> (a){
// }
// interface {

// }

// Array<Type>

// js 超集
// Type Checker

// redux
// mobx

// react + mobx = vue + vuex

// store
// redux

//  多个store

// combineReduders、applyMiddle
// store
// reducers
// dispatch -> 同步
// redux-saga、redux-thunk
// commit、 -> 
// redux -> store -> reducers -> dispatch string 

// dva -> redux + redux + saga
// 约定路由
// router

// ^x.y.z major minor patch
// ~

/**
 * param a 'wd'
 */
interface A {
  a: String
  B: {
    b: 
  },
}

// let a
// ast.view
{
  sourFile: [{
    sourceFile: {
      type: ''
    }
  }]
}

// typechecker -> AST -> 词法分析
// "{
//   "a": "wd"
// }"

// // <Provider store ={stroe}>
// context -> C 拿到 A
  
// </Provider>

// connect(mapStateTopros, mapDispacth)(A)
// props
// dispatch -> props

// 单向数据流

// XMLHttpRequest


// post -> 
// navigator.sendBeacon(url, data)

// gerrit CI

// CI CD
// CI -> git push -> repo -> merge -> CI
// CI -> npm i > npm run start

// lighthourse

// TCP、UDP

// OSI -> 
// 物理层传输的单位

// http1.0 -> http1.1 -> http2
// conneecton: keep-alive

// http3 QUIC -> TCP,UDP 

// ajax http
// ajax

// DNS -> 域名解析 -> ip
// DNS 缓存
// localhost -> a.test.com -> test.com

// TLS
// https 

// http + TLS = https
// CA -> 公钥 -> clinet 
// 公钥 加密 -》  

// SHA 对称
// RSA 非对称

// 1. 打包优化
// 2. CDN
// 3. 图片资源 base64
// 4. 减少代码体积
// 5. 构建优化

// treeshaking -> B.js 
// import A A 摇

// babel ES6 -> ES5
// 编译 代码 -> AST -> ES5 -> ES5

// 记下来
// parse -> traverse -> generator

// GPU结束

// pwa -> service worker、dist、cache、？
// 推送

// wd.com/assets.css  -> plugin: url: wd.cdn.com/ -> wd.cdn.com/

// webpack
// webpack -> input -> output -> dist
// socket.io
// HMR -> 

// createElement
// jsx

// v8 
// 垃圾回收
// 新生代内存区 老。。 ...  (少且频繁)
// 新生代 Sca
// from 正在进行 |  to 闲置
// 对象

// (多且缓慢)
// 标记-清除
// 标记-整理

// websocket 原理-> socket.io

// js编译原理
// AST、执行上下文 -> 字节码（机器码） -> 执行代码
// 即时编译原理 JIT

// http 请求

// 
// html -> dom css -> cssomtree render

// table
// position

// js

// rem、em、vw/wh

// rem -> font-size js 屏幕 -> font-size

// screenWith /  ->  font-size :16px
```

输出题目：
```
// if ([]) {
//   console.log('1');
// }

// if ({}) {
//   console.log('2');
// }

// if ([] == false) {
//   console.log('3');
// }

// if ({} == false) {
//   console.log('4');
// }

function a() {
  this.b = 3
}
var b = 5
var c = new a()
a.prototype.b = 4
console.log(c.b) // 3

for (let i = 0; i < 2; i++) {
  setTimeout(() => {
    for (var j = 0; j < 3; j++) {
      setTimeout(() => {
        console.log(i * j)
      }, 0)
    }
  }, 0)
}

// 6 6 6 6 6 6
// 0 0 0 0 1 2
// 0 0 0 3 3 3

// node 中 js 和 浏览器 js
// this -> window
// node -> {}
// DOM、和BOM
// node fs、path
console.log(this);

// eventloop

// cookie -> sameSite -> ?

// jsonp cors nginx
// upstream { server_name: 'xxx.com' }
```

### 对话记录

![6A50E506A84D4E80C6B56F8E3EB69F98](https://zoomdong.oss-cn-beijing.aliyuncs.com/img/20200719114839.jpg)

![2C119CA060EE41B47361BC7D6017CEF8](https://zoomdong.oss-cn-beijing.aliyuncs.com/img/20200719114852.jpg)

![09BE46703F128916FD291419AB6C932B](https://zoomdong.oss-cn-beijing.aliyuncs.com/img/20200719114905.jpg)


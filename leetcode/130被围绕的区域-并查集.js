// 参考题解：https://leetcode-cn.com/problems/surrounded-regions/solution/bfsdi-gui-dfsfei-di-gui-dfsbing-cha-ji-by-ac_pipe/
// 并查集通常是用来解决联通性问题，即将一个图里面联通的地方划分出来
// 当我们判断图中两个点之间是否存在路径时，就可以根据判断他们是否在一个连通区域来判断。
// 并查集的思想就是，同一个联通区域内的所有点的根节点是同一个。将每个点映射成一个数字。
// 先假设每个点的根节点就是他们自己，然后我们以此输入联通的点对，然后将一个点的根节点赋值成另外一个节点的跟节点。
// 这样这两个点所在的联通区域又相互联通来。

// 并查集的基本操作
/**
 * find(int m) 查找m的根节点
 * isConnected(int m, int n) 判断m ,n两个点是否在一个联通区域
 * union(int m, int n) 合并 m, n 两个点所在联通区域
 * 
 * public UnionFind (int totalNodes) {
 *   parents = new int[totalNodes];
 *   for (let i = 0;i<totalNodes; i++ ) {
 *     parents [i] = i
 *   }
 * }
 * 合并联通区域是通过find来做的，即看两个点是否在一个联通区域内
 * void union (int node1, int node2) {
 *   int root1 = find(node1);
 *   int root2 = find(node2);
 *   if (root1 != root2) {
 *     parents[root2] = root1;
 *   }
 * }
 * 
 * int find (int node) {
 *   while (parents[node] != node) {
 *     // 当前节点的父节点，指向父节点的父节点
 *     // 保证一个联通区域最终的parents只有一个
 *     parents[node] = parents[parents[node]]
 *     node = parents[node]
 *   }
 *   return node;
 * }
 * boolean isConnected(int node1, int node2) {
        return find(node1) == find(node2);
    }
 */

class UnionFind {
  constructor(totalNodes) {
    this.parents = []
    for (let i = 0; i < totalNodes; i++) {
      this.parents[i] = i
    }
  }
  union(node1, node2) {
    let root1 = this.find(node1)
    let root2 = this.find(node2)
    if (root1 !== root2) {
      this.parents[root2] = root1
    }
  }
  find(node) {
    while (this.parents[node] !== node) {
      this.parents[node] = this.parents[this.parents[node]]
      node = this.parents[node]
    }
    return node
  }
  // 判断是否联通
  isConnected(node1, node2) {
    return this.find(node1) === this.find(node2)
  }
}

const solve = (board) => {
  if (!board || board.length === 0) {
    return
  }
  let m = board.length
  let n = board[0].length
  let uf = new UnionFind(m * n + 1)
  let dummyNode = m * n
  const node = (i, j) => {
    return i * m + j
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') {
        // 遇到 'O' 就并查集合并
        if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
          uf.union(node(i, j), dummyNode)
        } else {
          // 和上下左右合并成一个联通区域
          if (i > 0 && board[i - 1][j] === 'O')
            uf.union(node(i, j), node(i - 1, j))
          if (i < m - 1 && board[i + 1][j] === 'O')
            uf.union(node(i, j), node(i + 1, j))
          if (j > 0 && board[i][j - 1] === 'O')
            uf.union(node(i, j), node(i, j - 1))
          if (j < n - 1 && board[i][j + 1] === 'O')
            uf.union(node(i, j), node(i, j + 1))
        }
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (uf.isConnected(node(i, j), dummyNode)) {
        // 和dummyNode 在一个连通区域的,那么就是O；
        board[i][j] = 'O'
      } else {
        board[i][j] = 'X'
      }
    }
  }
}

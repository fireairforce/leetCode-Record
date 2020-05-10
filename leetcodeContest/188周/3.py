class Solution:
  # 把有苹果节点至根节点的所有节点加入集合set中，如果len(set)<=1时，结果为0，否则结果为（len(set)-1）*2
  def minTime(self, n: int, edges: List[List[int]], hasApple: List[bool]) -> int:
    ans = set()
    dic = {}
    for edge in edges:
      dic[edges[1]] = edge[0]
    
    for i in range(len(hasApple)):
      if hasApple[i] == True:
        ans.add(i)
        root = dic.get(i)
        while root is not None:
          ans.add(root)
          root = dic.get(root)
    n = len(ans)
    if n == 0 or n == 1:
      return 0
    else:
      return (n - 1) * 2
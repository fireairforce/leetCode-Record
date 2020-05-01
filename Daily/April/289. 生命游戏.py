class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        m, n = len(board), len(board[0])

        def count_alive(board, i, j):
            cnt = 0
            dir = [[-1, -1], [-1, 0], [-1, 1], [1, -1],
                   [1, 0], [1, 1], [0, -1], [0, 1]]
            for dx, dy in dir:
                x, y = i + dx, j + dy
                if x < 0 or y < 0 or x == m or y == n:
                    continue
                else:
                    if board[x][y] in ['a', 1]:
                        cnt += 1
            return cnt

        for i in range(m):
            for j in range(n):
                cnt = count_alive(board, i, j)
                if board[i][j] == 1 and cnt in [2, 3]:
                    board[i][j] = 'a'
                elif board[i][j] == 0 and cnt == 3:
                    board[i][j] = 'b'

        for i in range(m):
            for j in range(n):
                if board[i][j] in ['a', 'b']:
                    board[i][j] = 1
                else:
                    board[i][j] = 0

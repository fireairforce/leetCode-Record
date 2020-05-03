class Solution:
    def kthSmallest(self, mat: List[List[int]], k: int) -> int:
        m, n = len(mat), len(mat[0])
        H = [0]
        for l in mat:
            HH = []
            for c in l:
                for h in H:
                    HH.append(c + h)
            H = sorted(HH)[:k]
        return H[-1]

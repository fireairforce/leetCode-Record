class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        res = -float('inf')
        imax = 1
        imin = 1
        for i in range(len(nums)):
            if nums[i] < 0: 
                [imax, imin] = [imin,imax]
            imax = max(nums[i], nums[i] * imax)
            imin = min(nums[i], nums[i] * imin)
            res = max(res, imax)
        return res
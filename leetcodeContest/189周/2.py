class Solution:
    def arrangeWords(self, text: str) -> str:
        item = text.split(' ')
        res = []
        for list in item:
            list = list.lower()
            res.append(list)
        res1 = sorted(res, key=lambda i: len(i), reverse=False)
        res = ' '.join(res1).capitalize()
        return res

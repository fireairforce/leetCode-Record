class Solution {
public:
    int kthSmallest(vector<vector<int>>& mat, int k) {
        int m=mat.size();
        int n=mat[0].size();
        vector<int> res(mat[0]);
        for(int i=1;i<m;++i)
        {
            multiset<int> st;
            for(int x:res)
            {
                for(int y:mat[i])
                {
                    st.insert(x+y);
                }
            }
            res.assign(st.begin(),st.end());
            res.resize(min(k,(int)res.size()));
        }
        return res[k-1];
    }
};

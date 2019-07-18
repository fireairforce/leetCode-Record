var arr = []
function Insert(num) {
    // write code here
    arr.push(num);
    arr.sort((a,b)=>a-b);
}

function GetMedian() {
    // write code here
    if(arr.length&1){
       return arr[Math.floor(arr.length/2)];
    } else {
       return (arr[Math.floor(arr.length/2)] + arr[Math.floor(arr.length/2)-1])/2;
    }
}
module.exports = {
    Insert: Insert,
    GetMedian: GetMedian
};
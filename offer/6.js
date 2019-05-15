function minNumberInRotateArray(rotateArray)
{
    // write code here
    if(rotateArray.length === 0){
        return 0;
    } 
    rotateArray.sort((a,b)=>a-b);
    return rotateArray[0];
}
module.exports = {
    minNumberInRotateArray : minNumberInRotateArray
};
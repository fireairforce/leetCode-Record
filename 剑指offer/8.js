function jumpFloor(number)
{
    // write code here
    let f = [];
    f[1] = 1;
    f[2] = 2;
    for(let i=3;i<=number;i++){
        f[i] = f[i-1] + f[i-2];
    }
    return f[number];
}
module.exports = {
    jumpFloor : jumpFloor
};
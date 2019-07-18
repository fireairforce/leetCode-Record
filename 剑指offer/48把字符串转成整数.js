function StrToInt(str)
{
    // write code here
    if(str.length<1){
        return 0;
    } else if(str.length===1&&str[0]<='0'||str[0]>='9'){
        return 0;
    }
    let flag = 1;
    let flag2 = 0;
    let str1 = '';
    if(str[0]==='-'||'0'<=str[0]&&str[0]<='9'){
        str1+=str[0];
        flag2 = 1;
    }else if(str[0]==='+'){
        flag2 = 1;
    }
    for(let i = 1;i<str.length;i++){
        if('0'<=str[i]&&str[i]<='9'){
            str1+=str[i];
        } else {
            flag = 0;
        }
    }
    if(flag&&flag2){
        return str1;
    }
    return 0;
}
console.log(StrToInt('-'));
module.exports = {
    StrToInt : StrToInt
};
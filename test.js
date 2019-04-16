let gcd = (a,b)=>{
    while(b){
       let t = b;
       b = a% b;
       a = t;
    }
    return a;
}
console.log(gcd(0,4))
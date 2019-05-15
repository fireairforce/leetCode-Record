module.exports = {
    add:(...args) => {
        return args.reduce((prev,curr)=>{
            return prev + curr;
        })
    },
    mul: (...args) => {
        return args.reduce((prev,curr)=>{
            return prev*curr;
        })
    }
}

let arr2 = [];
let Reduce = (arr) =>{
   arr.forEach(item=>{
       if(item instanceof Array){
           Reduce(item);
       } else {
           arr2.push(item);
       }
   })
   return arr2;
}
Solved = (arr) =>{
    arr = [...new Set(arr)]
    arr.sort((a,b)=>a-b);
    return arr;
}
let arr = [[1,2,4,5],[1,2,4],[[4,5,6],1,2],12]

Reduce(arr)

const flattern = (arr) => {
    while(arr.some(item=>Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}

console.log(flattern([1,2,4,5,[1,[5,4,3,7]]]));

const sleep = (time) => {
    return new Promise(resolve=>{
        setTimeout(resolve,time)
    })
}

console.log(`1`);
sleep(2000).then(()=>{
    console.log(`2`);
})

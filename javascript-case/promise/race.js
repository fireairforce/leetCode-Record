Promise.race = function(promises) {
    return new Promise((resolve,reject) => {
        let len = promises.length;
        if(len === 0){
            return;
        }
        for(let i = 0;i<len;i++){
            Promise.resolve(promises[i]).then(res => {
                resolve(data);
                return;
            }).catch(err => {
                reject(err);
                return;
            })
        }
    })
}
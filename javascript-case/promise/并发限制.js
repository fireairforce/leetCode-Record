const promiseAllLimit = (promises, limit) => {
    return new Promise((resolve, reject) => {
         let res = [];
         let runningCount = 0;
         let idx = 0;
         let completeCount = 0;

         const next = () => {
            if (completeCount === promises.length) {
                return resolve(res);
            }

            while(runningCount < limit && idx < promises.length) {
                let curIdx = idx;
                idx ++;
                runningCount ++;
                Promise.resolve(promises[curIdx]).then((val) => {
                    res[curIdx] = val;
                    completeCount ++;
                    runningCount --;
                    next();
                }).catch(reject)
            }
         }
         next();
    });
}
const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(5), time));
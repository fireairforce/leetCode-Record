function PromiseAllSettled(promises) {
    return new Promise((resolve) => {
        let res = [];
        let count = 0;

        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then((val) => {
                res[i] = {
                    status: 'fulfilled',
                    value: val
                }
            }).catch((err) => res[i] = {
                status: 'rejected',
                reason: err
            }).finally(() => {
                count++;
                if (count === promises.length) {
                    resolve(res);
                }
            })
        }

    })
}

const p1 = Promise.resolve(1);
const p2 = Promise.reject("error");
const p3 = new Promise((resolve) => setTimeout(() => resolve(3), 1000));

PromiseAllSettled([p1, p2, p3]).then(console.log);
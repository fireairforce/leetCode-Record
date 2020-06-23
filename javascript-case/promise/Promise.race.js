/**
 * 只要有一个promise执行完成
 * 直接resolve并停止执行
 */

 Promise.race = (promises) => {
   return new Promise((resolve, reject) => {
     let len = promises.length;
     if (len === 0) {
       return
     }
     for (let promise of promises) {
       Promise.resolve(promise).then((res) => {
         resolve(res)
         return
       }).catch((err) => {
         reject(err)
         return
       })
     }
   })
 }
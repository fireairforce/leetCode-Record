/**
 * 传入参数为一个空的迭代对象，则直接进行resolve
 * 传入参数里面又一个resolve 失败，则整个流程中段
 * 任何情况下，Promise.all返回的 promsie 完成状态是个数组
 */

Promise.all = (promises) => {
  return new Promise((resolve, reject) => {
    let result = []
    let index = 0
    let len = promises.length
    if (len === 0) {
      resolve(result)
      return
    }

    for (let promise of promises) {
      // 不直接使用pomise[i].then,是因为promise[i]可能不是一个promise
      Promise.resolve(promise)
        .then((data) => {
          result[index] = data
          index++
          if (index === len) {
            resolve(result)
          }
        })
        .catch((err) => {
          reject(err)
        })
    }
  })
}

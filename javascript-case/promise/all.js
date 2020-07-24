Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let result = []
    let index = 0
    let len = promises.length
    if (len === 0) {
      resolve(result)
      return
    }
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i])
        .then((data) => {
          result[i] = data
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

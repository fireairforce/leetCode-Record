/**
 * 无论当前 promise 是成功还是失败，调用 finnally 之后都会执行 finally 中传入的函数
 * 然后把值原封不同往下面传
 */

Promise.prototype.finally = (callback) => {
  this.then(
    (value) => {
      return Promise.resolve(callback()).then(() => {
        return value
      })
    },
    (err) => {
      return Promise.resolve(callback()).then(() => {
        throw err
      })
    },
  )
}

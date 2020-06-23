/**
 * 传参为Promise,则直接返回
 * 传参为thenable对象，返回Promise会跟随这个对象
 * 采用它最终状态作为自己的状态
 * 其他情况，直接返回该值为成功状态的 promise 对象
 */

Promise.resolve = (param) => {
  if (param instanceof Promise) {
    return param
  }
  return new Promise((resolve, reject) => {
    if (param && param.then && typeof param.then === 'function') {
      param.then(resolve, reject)
    } else {
      resolve(param)
    }
  })
}

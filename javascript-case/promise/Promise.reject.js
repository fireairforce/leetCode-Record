/**
 * reject的参数会作为 reason 一直向下传
 */

Promise.reject = (reason) => {
  return new Promise((resolve, reject) => {
    reject(reason)
  })
}

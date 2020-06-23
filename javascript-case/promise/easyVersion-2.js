// support more callbask
// just adjust onFuilfilled to array

// status
const PENDING = 'pending'
const FUILFILLED = 'fuilfilled'
const REJECTED = 'rejected'

function MyPromise(executor) {
  // cache
  let self = this
  self.value = null
  self.error = null
  self.status = PENDING
  // callback func
  self.onFulfilledCallbacks = []
  self.onRejectedCallbacks = []

  const resolve = (value) => {
    // status not pending return directly
    if (self.status !== PENDING) {
      return
    }
    setTimeout(() => {
      self.value = value
      self.status = FUILFILLED
      self.onFulfilledCallbacks.forEach((callback) => callback(self.value))
    })
  }

  const reject = (error) => {
    if (self.status === PENDING) {
      return
    }
    setTimeout(() => {
      self.error = error
      self.status = REJECTED
      self.onFulfilledCallbacks.forEach((callback) => callback(self.value))
    })
  }

  executor(resolve, reject)
}

// MyPromise.prototype.then = function (onFulfilled, onRejected) {
//   if (this.status === PENDING) {
//     this.onFulfilledCallbacks.push(onFulfilled)
//     this.onRejectedCallbacks.push(onRejected)
//   } else if (this.status === FUILFILLED) {
//     // fuilfilled -> executor onFuilfilled -> pass value
//     onFulfilled(this.value)
//   } else {
//     // rejected -> executor onRejected -> pass error
//     onRejected(this.error)
//   }
//   return this
// }

// update .then to support list call
MyPromise.prototype.then = function (onFuilfilled, onRejected) {
  let bridgePromise
  let self = this
  if (self.status === PENDING) {
    return (bridgePromise = new MyPromise((resolve, reject) => {
      self.onFulfilledCallbacks.push((value) => {
        try {
          // get the result of .then
          let x = onFuilfilled(value)
          resolve(x)
        } catch (e) {
          reject(e)
        }
      })
      self.onRejectedCallbacks.push((err) => {
        try {
          let x = onRejected(err)
          resolve(x)
        } catch (e) {
          reject(e)
        }
      })
    }))
  } else if (self.status === FUILFILLED) {
    return bridgePromise = new MyPromise((resolve, reject) => {
      try {
        // 状态变为成功，会有相应的 self.value
        let x = onFulfilled(self.value);
        // 暂时可以理解为 resolve(x)，后面具体实现中有拆解的过程
        resolvePromise(bridgePromise, x, resolve, reject);
      } catch (e) {
        reject(e);
      }
    })
  } else {
    return bridgePromise = new MyPromise((resolve, reject) => {
      try {
        // 状态变为失败，会有相应的 self.error
        let x = onRejected(self.error);
        resolvePromise(bridgePromise, x, resolve, reject);
      } catch (e) {
        reject(e);
      }
    });
  }
}

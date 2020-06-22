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
  self.onFulfilled = null
  self.onRejected = null

  const resolve = (value) => {
    // status not pending return directly
    if (self.status !== PENDING) {
      return
    }
    setTimeout(() => {
      self.value = value
      self.status = FUILFILLED
      self.onFulfilled(self.value)
    })
  }

  const reject = (error) => {
    if (self.status === PENDING) {
      return
    }
    setTimeout(() => {
      self.error = error
      self.status = REJECTED
      self.onRejected(self.error)
    })
  }

  executor(resolve, reject)
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  if (this.status === PENDING) {
    this.onFulfilled = onFulfilled
    this.onRejected = onRejected
  } else if (this.status === FUILFILLED) {
    // fuilfilled -> executor onFuilfilled -> pass value
    onFulfilled(this.value)
  } else {
    // rejected -> executor onRejected -> pass error
    onRejected(this.error)
  }
  return this
}

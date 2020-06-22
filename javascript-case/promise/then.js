const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function MyPromise(executor) {
  this.state = PENDING;
  this.value = null;
  this.reason = null;
  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];
  const resolve = (value) => {
    if (this.state === PENDING) {
      this.state = FULFILLED;
      this.value = value;
      this.onFulfilledCallbacks.forEach((fun) => {
        fun();
      });
    }
  };
  const reject = (value) => {
    if (this.state === PENDING) {
      this.state = REJECTED;
      this.value = value;
      this.onRejectedCallbacks.forEach((fun) => {
        fun();
      });
    }
  };
  try {
    executor(resolve, reject);
  } catch (reason) {
    reject(reason);
  }
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
  switch (this.state) {
    case FULFILLED:
      onFulfilled(this.value);
      break;
    case REJECTED:
      onRejected(this.value);
      break;
    case PENDING:
      this.onFulfilledCallbacks.push(() => {
        onFulfilled(this.value);
      });
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      });
      break;
  }
};

const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function MyPromise(executor) {
  this.state = PENDING;
  this.value = null;
  this.reason = null;
  const resolve = (value) => {
    if (this.state === PENDING) {
      this.state = FULFILLED;
      this.value = value;
    }
  };
  const rejecte = (value) => {
    if (this.state === PENDING) {
      this.state = REJECTED;
      this.value = value;
    }
  };
  try {
    executor(resolve, rejecte);
  } catch (reason) {
    rejecte(reason);
  }
}

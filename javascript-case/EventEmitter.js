function EventEmitter() {
  // 用于存放监听事件
  this.listeners = {}
}

EventEmitter.prototype.on = function (event, cb) {
  if (!this.listeners[event]) {
    this.listeners[event] = [].concat(cb)
  } else {
    if (!this.listeners[event].includes(cb)) {
      this.listeners.push(cb)
    }
  }
}

EventEmitter.prototype.emit = function (event) {
  let args = Array.prototype.slice.call(arguments)
  args.shift()
  this.listeners[event].forEach((cb) => {
    cb.apply(null, args)
  })
}

EventEmitter.prototype.removeListener = function (event, listener) {
  let arr = this.listeners[event] || []
  let i = arr.indexOf(listener)
  if (i > 0) {
    this.listeners.splice(i, 1)
  }
}

EventEmitter.prototype.once = function (event, listener) {
  var self = this;

  function fn() {
    var args = Array.prototype.slice.call(arguments);
    listener.apply(null, args);
    self.removeListener(event, fn);
  }
  this.on(event, fn)
}
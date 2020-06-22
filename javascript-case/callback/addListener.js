import EventEmitter from './EventEmitter'
// once 用于表示是否只需触发一次
const wrapCallback = (fn, once = false) => ({ callback: fn, once })

EventEmitter.prototype.addListener = function (type, fn, once = false) {
  let handler = this.events.get(type)
  // 如果没有就绑定回调事件
  if (!handler) {
    this.events.set(type, wrapCallback(fn, once))
  } else if (handler && typeof handler.callback === 'function') {
    // 如果只有一个回调函数
    this.events.set(type, [handler, wrapCallback(fn, once)])
  } else {
    // 如果有多个回调函数
    handler.push(wrapCallback(fn, once))
  }
}

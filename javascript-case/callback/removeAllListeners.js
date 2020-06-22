import EventEmitter from './EventEmitter'

// 移除所有的type
EventEmitter.prototype.removeAllListener = function (type) {
  let handler = this.events.get(type)
  if (!handler) {
    return
  } else {
    this.events.delete(handler)
  }
}

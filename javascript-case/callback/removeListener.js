import EventEmitter from './EventEmitter'

EventEmitter.prototype.removeEventListener = function (type, listener) {
  let handler = this.events.get(type)
  if (!handler) {
    return
  }
  if (!Array.isArray(handler)) {
    if (handler.callback === listener.handler) {
      this.events.delete(type)
    } else {
      return
    }
  }
  for (let i = 0; i < handler.length; i++) {
    let item = handler[i]
    if (item.callback === listener.callback) {
      // 删除这个回调即可
      handler.splice(i, 1)
      i--
      if (handler.length === 1) {
        // 长度为1,就不用数组存
        this.events.set(type, handler[0])
      }
    }
  }
}

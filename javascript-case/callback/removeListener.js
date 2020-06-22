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

// emit 遍历回调列表，once 为 true 的直接remove 掉
EventEmitter.prototype.emit = function (type, ...args) {
  let handler = this.events.get(type)
  if (!handler) {
    return
  }
  if (Array.isArray(handler)) {
    // 遍历回调列表
    handler.map((item) => {
      item.callback.apply(this, args)
      // once 为 true的直接移除
      if (item.once) {
        this.removeEventListener(type, item)
      }
    })
  } else {
    // 否则只有一个回调执行
    handler.callback.apply(this, args)
  }
  return true
}

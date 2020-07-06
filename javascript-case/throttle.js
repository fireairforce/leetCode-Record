// 单位时间只能触发一次函数,单位时间内触发多次，只有一次生效
// 节流函数
// 节流重在timer = null 这是个开关锁
const throttle = (f, delay) => {
  let timer
  return (...args) => {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      f(...args)
      timer = null
    }, delay)
  }
}

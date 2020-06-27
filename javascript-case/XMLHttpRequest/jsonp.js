const jsonp = ({
  url,
  params,
  callbackName
}) => {
  const generateURL = () => {
    let dataStr = '';
    for (let key in params) {
      dataStr += `${key}=${params[key]}&`
    }
    dataStr += `callback=${callbackName}`;
    return `${url}?${dataStr}`
  }
  return new Promise((resolve, reject) => {
    // 初始化 callback function name
    callbackName = callbackName || Math.random().toString().replace(',', '');
    // 创建一个 script 元素并加到当前文档中
    let scriptFile = document.createElement('script')
    scriptFile.src = generateURL()
    document.body.appendChild(scriptFile)
    // 绑定到 window 上面，为了后面调用
    window[callbackName] = (data) => {
      resolve(data)
      // script 执行完了，成为无用的元素，需要清楚
       document.body.removeChild(scriptFile)
    }
  })
}
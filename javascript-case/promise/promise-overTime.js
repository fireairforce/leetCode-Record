// 使用 Promise.race 来做一个上传请求和定时器函数做竞争

const uploadFile = (url, params, timeout) => {
  return Promise.race([uploadFile(url, params), uploadFileTimeout(timeout)])
}

const uploadFilePromise = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then((res) => {
      if (res.status === 200) {
        resolve(res.data)
      } else {
        reject('Err')
      }
    })
  })
}

const uploadFileTimeout = (time) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error: timeout is exceed!')
    }, time)
  })

const fs = require('fs')
const { rejects } = require('assert')
const { resolve } = require('path')

let readFilePromise = (filename) => {
  fs.readFile(filename, (err, data) => {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
}

readFilePromise('1.json').then(data => {
  return readFilePromise('2.json')
})
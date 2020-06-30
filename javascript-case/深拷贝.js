function deepClone(obj) {
  let copy = obj instanceof Array ? [] : {};
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      copy[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return copy;
}

const deepClone = (obj) => {
  let copy = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = Object.prototype.toString().call(obj[key]) === ['object Object'] ||  Object.prototype.toString().call(obj[key]) === ['object Array']? deepClone(obj[key]) : obj[key]
    }
  }
}

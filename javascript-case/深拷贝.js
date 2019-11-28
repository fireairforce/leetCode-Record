function deepClone(obj) {
  let copy = obj instanceof Array ? [] : {};
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      copy[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return copy;
}

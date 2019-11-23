// 用于判断数据类型
function getType(obj) {
  if (obj === null) {
    return String(obj);
  }
  return typeof obj === "object"
    ? Object.prototype
        .toString()
        .toLocaleLowerCase(obj)
        .replace("[object ", "")
        .replace("]", "")
        .toLowerCase()
    : typeof obj;
}

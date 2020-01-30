/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  let flag1 = 0;
  let flag2 = 0;
  for (let i = 0; i < version1.length; i++) {
    if (version1[i] === ".") {
      flag1 = 1;
    }
  }
  for (let i = 0; i < version2.length; i++) {
    if (version2[i] === ".") {
      flag2 = 1;
    }
  }
  //   两个都毛的逗号
  if (!flag1 && !flag2) {
    if (parseInt(version1) === parseInt(version2)) {
      return 0;
    } else if (parseInt(version1) > parseInt(version2)) {
      return 1;
    } else {
      return -1;
    }
  }
  if (flag1 && !flag2) {
    let str1 = version1.split(".");
    if (parseInt(str1[0]) === parseInt(version2)) {
      if (parseInt(str1[str1.length - 1]) > 0) {
        return 1;
      } else {
        return 0;
      }
    } else if (parseInt(str1[0]) > parseInt(version2)) {
      return 1;
    } else {
      return -1;
    }
  }
  if (!flag1 && flag2) {
    let str1 = version2.split(".");
    if (parseInt(str1[0]) === parseInt(version1)) {
      if (parseInt(str1[str1.length - 1]) > 0) {
        return -1;
      } else {
        return 0;
      }
    } else if (parseInt(str1[0]) > parseInt(version1)) {
      return 1;
    } else {
      return -1;
    }
  }
  if (flag1 && flag2) {
    let str1 = version1.split(".");
    let str2 = version2.split(".");
    let len = Math.min(str1.length, str2.length);
    for (let i = 0; i < len; i++) {
      if (parseInt(str1[i]) > parseInt(str2[i])) {
        return 1;
      } else if (parseInt(str1[i]) < parseInt(str2[i])) {
        return -1;
      }
    }
    if (str1.length !== str2.length) {
      if (str1.length === len) {
        if (parseInt(str2[str2.length - 1]) > 0) {
          return -1;
        } else {
          return 0;
        }
      } else {
        if (parseInt(str1[str1.length - 1]) > 0) {
          return 1;
        } else {
          return 0;
        }
      }
    }
  }
  return 0;
};

console.log(compareVersion("1", "1.1"));

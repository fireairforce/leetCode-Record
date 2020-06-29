const transver = (str) => {
  let obj = new Map()
  // 存一下位数
  obj.set('零', '0')
  obj.set('一', '1')
  obj.set('二', '2')
  obj.set('三', '3')
  obj.set('四', '4')
  obj.set('五', '5')
  obj.set('六', '6')
  obj.set('七', '7')
  obj.set('八', '8')
  obj.set('九', '9')
  obj.set('十', '10')
  obj.set('百', '100')
  obj.set('千', '1000')
  obj.set('万', '10000')
  obj.set('十万', '100000')
  obj.set('百万', '1000000')
  obj.set('千万', '10000000')
  obj.set('亿', '100000000')
  str = str.split('')
  let res = 0;
  // 开变量记录之前数字里面的最大单位，然后后面比他小的单位就加起来
  // 比他大的用前面的结果存起来
  let temp = '';
  let prev = 0
  for (let i = 0; i < str.length; i++) {
    if (res === 0) {
      res += parseInt(obj.get(str[i]))
      continue;
    }
    // 如果后面是值
    if (obj.get(str[i]).length === 1) {
      prev = parseInt(obj.get(str[i]))
      // 如果是位数
    } else if (obj.get(str[i]).length >= 2) {
      // 先初始化单位
      if (temp.length === 0) {
        temp = obj.get(str[i])
        if (!prev) {
          res = res * parseInt(temp)
        } else {
          res += prev * parseInt(temp)
        }
      } else {
        // 如果当前单位比之前那位要小
        if (obj.get(str[i]).length < temp.length) {
          res += parseInt(prev) * parseInt(obj.get(str[i]))
          prev = 0
        } else if (obj.get(str[i]).length > temp.length) {
          if (prev) {
            res += prev;
            prev = 0;
          }
           // 单位要大的话
          res = res * parseInt(obj.get(str[i]))
          temp = ''
        }
      }
    }
    if (i === str.length - 1) {
      if (prev) {
        res += prev;
        prev = 0;
      }
    }
  }
  return res;
}
// console.log(transver('八千万'));
// console.log(transver('三千五百四十一万四千零一'));
// console.log(transver('三千五百四十一万'));

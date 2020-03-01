/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  let res = [];
  let temp = [];
  for (let i = 0; i < searchWord.length; i++) {
    let x = searchWord.slice(0, i + 1);
    for (let j = 0; j < products.length; j++) {
      let tmpStr = products[j];
      if (x === tmpStr.slice(0, i + 1)) {
        temp.push(products[j]);
      }
    }
    temp = temp.sort();
    if (temp.length > 3) {
      //   temp = temp.sort();
      temp = temp.slice(0, 3);
    }
    res.push(temp);
    temp = [];
  }
  return res;
};


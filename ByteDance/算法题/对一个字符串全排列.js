const fullpermutate = (str) => {
  const result = [];
  if (str.length > 1) {
    for (let i = 0; i < str.length; i++) {
      let left = str[i];
      let rest = str.slice(0, i) + str.slice(i + 1, str.length);
      let preResult = fullpermutate(rest);
      for (let j = 0; j < preResult.length; j++) {
        let temp = left + preResult[j];
        result.push(temp);
      }
    }
  } else if (str.length === 1) {
    result.push(str);
  }
  return result;
};

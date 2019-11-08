let obj1 = {
  a: 1,
  b: 7,
};

let obj2 = {
  b: 7,
  a: 1,
};

let isObjEqual = (a, b) => {
  let aProps = Object.getOwnPropertyNames(a);
  let bProps = Object.getOwnPropertyNames(b);
  if (aProps.length !== bProps.length) {
    return false;
  }
  for (let i = 0; i < aProps.length; i++) {
    let propName = aProps[i];
    if(a[propName] !== b[propName]) {
        return false;
    }
  }
  return true;
};

console.log(isObjEqual(obj1,obj2));
function valueAtBit(num, bit) {
    var str = num.toString(2);
    var arr = str.split('');
    return arr[arr.length - bit];
}

// console.log(valueAtBit(2,1))
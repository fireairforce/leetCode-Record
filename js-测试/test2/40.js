function captureThreeNumbers(str) {
   return /(d{3})/g.test(str);
}

// console.log(captureThreeNumbers('98as'));
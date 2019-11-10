function debounce(fn) {
  let timeout = null;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, 500);
  };
}
function sayHi() {
  console.log(`开始防抖`);
}

var inp = document.getElementById("inp");
inp.addEventListener("input", debounce(sayHi));
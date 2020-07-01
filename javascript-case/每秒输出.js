const solve = (index) => {
  if (index === 3) {
    return
  }
  index++
  setTimeout(() => {
    console.log(`hello world`)
    solve(index)
  }, 1000)
}

// solve(0)


((index) => {
  if (index === 3) {
    return
  }
  index++
  setTimeout(() => {
    console.log(`hello world`)
    solve(index)
  }, 1000)
})(0)


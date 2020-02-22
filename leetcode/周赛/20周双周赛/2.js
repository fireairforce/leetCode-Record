/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
var Cashier = function(n, discount, products, prices) {
  this.n = n
  this.shop = {}
  for (let i = 0; i < products.length; i++) {
    this.shop[products[i]] = prices[i]
  }
  this.discount = discount
  this.count = 0
}

/**
 * @param {number[]} product
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function(product, amount) {
  //    用来记录打折
  this.count++
  let sum = 0
  let flag = false
  if (this.count % this.n === 0 && this.count !== 0) {
    flag = true
  }
  for (let i = 0; i < product.length; i++) {
    sum += amount[i] * this.shop[product[i]]
  }
  if (flag) {
    sum = sum - (sum * this.discount) / 100
  }
//   console.log(sum)
  return sum
}

/**
 * Your Cashier object will be instantiated and called as such:
 * var obj = new Cashier(n, discount, products, prices)
 * var param_1 = obj.getBill(product,amount)
 */

// let a = new Cashier(192, 34, [77], [302])
// a.getBill([77], [343])
// a.getBill([77], [990])
// a.getBill([77], [101])

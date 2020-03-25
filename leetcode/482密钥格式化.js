/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  S = S.split('-')
    .join('')
    .toUpperCase()
    .split('')
  for (let i = S.length - K; i >= 0; i -= K) {
    if(i !== 0) {
      S.splice(i, 0, '-')
    }
  }
  return S.join('')
}

// console.log(licenseKeyFormatting('5F3Z-2e-9-w', 4))
// console.log(licenseKeyFormatting('2-5g-3-J', 2))


/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let len = flowerbed.length - 1,
        max = 0;
    for (let i = 0; i <= len; i++) {
        if (flowerbed[i] === 0) {
            if (i === 0 && flowerbed[i + 1] === 0) {
                flowerbed[i] = 1;
                i++;
                max++;
            } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
                flowerbed[i] = 1;
                i++;
                max++;
            } else if(i===len&&(flowerbed[i-1]===0||len===0)){
                max++;
            } 
        }
    }
    return max >= n;
};
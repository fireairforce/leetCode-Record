/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(
  restaurants,
  veganFriendly,
  maxPrice,
  maxDistance,
) {
  let res = [];
  let k = 0;
  for (let i = 0; i < restaurants.length; i++) {
    if (veganFriendly) {
      if (
        restaurants[i][2] === 1 &&
        restaurants[i][3] <= maxPrice &&
        restaurants[i][4] <= maxDistance
      ) {
        res[k] = JSON.parse(JSON.stringify(restaurants[i]));
        k++;
      }
    } else {
      if (restaurants[i][3] <= maxPrice && restaurants[i][4] <= maxDistance) {
        res[k] = JSON.parse(JSON.stringify(restaurants[i]));
        k++;
      }
    }
  }
  res.sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    }
    return b[1] - a[1];
  });
  let result = [];
  for (let i = 0; i < res.length; i++) {
    result.push(res[i][0]);
  }
  return result;
  //   console.log(result);
};

// filterRestaurants(
//     [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]],
//   0,
//   30,
//   3,
// );

function largestOfFour(arr) {
  let subArr = [];
  for (let i = 0; i < arr.length; i++) {
    let findMax = Math.max(...arr[i]);
    subArr.push(findMax);
  }
  return subArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
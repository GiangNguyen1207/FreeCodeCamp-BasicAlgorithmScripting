/*function findLongestWordLength(str) {
  let newArr = str.split(" ");
  let numArr = [];
  for (let i = 0; i < newArr.length; i++) {
    numArr.push(newArr[i].length);
  }
  return Math.max(...numArr);
}*/

function findLongestWordLength(str) {
  let newArr = str.split(" ").reduce((x, y) => x.length > y.length ? x : y )
  return newArr.length;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
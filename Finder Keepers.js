function findElement(arr, func) {
  let newArr = arr.filter(func);
  if(newArr) {
    return newArr[0];
  } else return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
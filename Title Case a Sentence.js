function titleCase(str) {
  let newStr = str.toLowerCase();
  let newArr = newStr.split(" ");
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1);
  }
  return newArr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
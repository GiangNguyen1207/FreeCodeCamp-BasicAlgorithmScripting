function repeatStringNumTimes(str, num) {
  let newArr = [];
  for (let i = 0; i < num; i++) {
    newArr.push(str);
  }
  return newArr.join("");
}

function repeatStringNumTimes(str, num) {
  if(num > 0) {
    return str.repeat(num);
  }
}

console.log(repeatStringNumTimes("abc", 3));
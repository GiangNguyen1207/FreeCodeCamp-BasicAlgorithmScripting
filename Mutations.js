function mutation(arr) {
  arr[0] = arr[0].toLowerCase().split("");
  arr[1] = arr[1].toLowerCase().split("");
  for (let i = 0; i < arr[1].length; i++) {
    if (arr[0].indexOf(arr[1][i]) < 0) return false
  } 
  return true;
}

console.log(mutation(["Hello", "Hey"]));
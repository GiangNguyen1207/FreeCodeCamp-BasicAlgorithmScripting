function confirmEnding(str, target) {
  let newArr = str.split("");
  return str.slice(str.length - target.length) === target
}

console.log(confirmEnding("Bastian", "n"));
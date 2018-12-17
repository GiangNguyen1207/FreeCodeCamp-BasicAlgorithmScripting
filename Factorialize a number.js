function factorialize(num) {
  let factorials = 1;
  for (let i = num; i > 0; i--) {
    factorials *= i;
  }
  return factorials;
}

console.log(factorialize(5));
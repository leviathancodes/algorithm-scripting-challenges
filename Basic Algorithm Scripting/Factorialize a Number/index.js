function factorialize(num) {
  if (num == 0){
    return 1;
  }
  
  let arr = [];
  for (let i = 0; i < num; num--) {
    arr.push(num);
  }
  const sum = (a, b) => a * b;
  return arr.reduce(sum);
}

console.log(factorialize(5));

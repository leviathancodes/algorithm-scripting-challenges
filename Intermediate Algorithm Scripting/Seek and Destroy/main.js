function destroyer(arr) {
let argsArr = [];
for (let i = 1; i < arguments.length; i++) {
  argsArr.push(arguments[i]);
}

let arrOfArr = [arr, argsArr];
console.log(arrOfArr);
for (let i = 0; i < arrOfArr.length; i++) {
  for (let j = 0; j < argsArr[i].length; j++) {
    if (arrOfArr[0][j] === arrOfArr[i]) {
      delete arrOfArr[0][j];
    }
  }
}
console.log(arrOfArr);
}




destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// destroyer(["tree", "hamburger", 53], "tree", 53);
// destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")

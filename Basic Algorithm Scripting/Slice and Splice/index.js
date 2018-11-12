function frankenSplice(arr1, arr2, n) {
  let slice1 = arr1.slice();
  let slice2 = arr2.slice();

   slice2.splice(n, 0, ...slice1);
  return slice2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

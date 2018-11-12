function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    var num = arr[i];

    if (func(num)) {
      return num;
    }
  }
}
findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);

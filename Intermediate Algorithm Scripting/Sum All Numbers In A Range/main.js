function sumAll(arr) {
  let newArr = [];
  arr.sort(function(a, b){return a-b});
  let min = arr[0];
  let max = arr[1];

  for (let i = 0; max >= min; max--) {
    newArr.push(max);
  }

  let middle = newArr.slice(1, newArr.length - 1);
  let middleJoin = middle.reduce(function (acc, currentValue) {
    return acc + currentValue;
  }, 0);

return middleJoin + arr[0] + arr[1];

}

sumAll([1, 4]);
sumAll([5, 10]);

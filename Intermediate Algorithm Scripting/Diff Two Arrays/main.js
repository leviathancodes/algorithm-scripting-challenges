function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  newArr.sort();
  console.log(newArr);
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === newArr[i + 1]) {
      newArr.splice(i, 1)
      newArr.splice(i, 1);
    }
  }

    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === newArr[i+1]) {
        newArr.splice(i, 1);
        newArr.splice(i, 1);
      }
    }


  if (newArr.length != 0) {
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === newArr[i+1]) {
        newArr.splice(i, 1);
        newArr.splice(i, 1);
      }
    }
  }


  console.log(newArr);
  // Same, same; but different.
  return newArr;
}



diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);

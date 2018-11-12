function titleCase(str) {
  let newArr = [];
  let arr =  str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    let cap = arr[i].charAt(0).toUpperCase();
    let titleCase =  cap + arr[i].substr(1).toLowerCase();
    newArr.push(titleCase);
  }
  return newArr.join(" ");
}

console.log(titleCase("sHoRt AnD sToUt"));

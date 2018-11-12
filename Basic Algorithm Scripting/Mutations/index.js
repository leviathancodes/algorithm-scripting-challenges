function mutation(arr) {

  let wordOne = arr[0].toUpperCase();
  let wordTwo = arr[1].toUpperCase();
  for (let i = 0; i < wordOne.length; i++) {
    if (wordOne.includes(wordTwo.charAt(i))) {
      continue;
    } else {
      return false;
    }
  }
return true;
}


console.log(mutation(["hello", "hey"]));

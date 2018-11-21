function fearNotLetter(str) {

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
    if (str == alphabet) {
    return undefined
  }
  let alphabetSlice = alphabet.slice(alphabet.indexOf(str[0]), alphabet.indexOf(str[str.length - 1]));
  console.log(alphabetSlice);
 let sliceArr =  alphabetSlice.split("");
 let strArr = str.split("");

  let res = sliceArr.filter(e => {
    for (let i = 0; i < strArr.length; i++) {
      if (e === strArr[i]) {
        return false;
      }
    }
    return true
  });
  return res.join('');
}

fearNotLetter("stvwx");
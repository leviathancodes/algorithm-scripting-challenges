function fearNotLetter(str) {
    let first = str[0];
    let last = str[str.length - 1]
    console.log(first);
    console.log(last);
    let regex = new RegExp(/[first-last]/)
    console.log(regex.match(str));

    return str;
  }
  
  fearNotLetter("abce");
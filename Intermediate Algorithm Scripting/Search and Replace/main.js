function myReplace(str, before, after) {
    let regex = /[A-Z]/g;
    if (before[0].match(regex)) {
        after = after[0].toUpperCase() + after.slice(1);
    }
    return str.replace(before, after);
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
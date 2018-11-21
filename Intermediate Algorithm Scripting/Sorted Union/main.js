function uniteUnique(arr) {
    let res = [];
   let concatArr = [].concat(...arguments);
    concatArr.forEach(e => {
        if (!res.includes(e)) {
            return res.push(e)
        }
    });
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
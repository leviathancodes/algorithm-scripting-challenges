function pairElement(str) {
    let newArr = [];
    let pairList = "ATACGC";
    let arr = str.split("");
    
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < 5; i++) {
            if (arr[j] === pairList[i]) {
              let pair = [];
              pair.push(arr[j]);
              pair.push(pairList[i + 1]);
              newArr.push(pair);
              break;
            }
          }
    }

     return newArr;
  }

  pairElement("ATCGA");
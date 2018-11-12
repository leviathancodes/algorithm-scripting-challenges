function whatIsInAName(collection, source) {
    keys = [];
    values = [];
    collection.forEach(e => {
        let keys = Object.keys(e);
        let values = Object.values(e);
        console.log(keys, values);
    });
    let sourceKey = Object.keys(source);
    let sourceValue = Object.values(source);

}   
//   whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 });
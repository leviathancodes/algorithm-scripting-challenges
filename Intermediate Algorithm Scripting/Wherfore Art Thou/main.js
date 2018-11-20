function whatIsInAName(collection, source) {
  let keyes =  Object.keys(source);
  console.log(keyes);
  return collection.filter((e) => {
      for (let i = 0; i < keyes.length; i++) {
          if(!e.hasOwnProperty(keyes[i]) || e[keyes[i]] !== source[keyes[i]]) {
              return false
          }
      }
      return true;
  }) 
}   
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, 
  { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }], 
  { last: "Capulet" })) 

// Convert a string to spinal case. 
// Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2')
    str = str.replace(/\W|_/g, "-");
    return str.toLowerCase();
  }
  
  spinalCase("The_Andy_Griffith_Show");
  spinalCase("AllThe-small Things");
  spinalCase("thisIsSpinalTap");
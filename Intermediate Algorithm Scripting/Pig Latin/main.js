function translatePigLatin(str) {
  let vowels = /a|e|i|o|u/g;
  if (str[0].match(vowels)) {
    return str + "way";
  }
for (let i = 0; i < str.length; i++) {
  if (str[i].match(vowels)) {
    let pig = str.slice(0, i);
    let sen = str.slice(i);
    return (sen+pig+"ay") 
  }
}
return str + "ay";
}
translatePigLatin("consonant");
function reverseString(str) {
  str.split(/\w/);
  reverse = [];

  for (let i = str.length - 1; i >= 0; i--){
  reverse.push(str[i]);
}
str = reverse.toString();
str = str.replace(/,/g, "");
return str;
}

console.log(reverseString("htraE morf sgniteerG"));

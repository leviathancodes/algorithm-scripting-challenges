function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return '';
  }
  let repeat = [];
  for (let i = 0; i < num; i++) {
    repeat.push(str);
  }
  return repeat.join('');
}

repeatStringNumTimes("abc", 3);

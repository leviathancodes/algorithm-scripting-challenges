function findLongestWordLength(str)
{
  let numArr = [];
  let strArr = str.split(/\s/);

    for(let i = 0; i < strArr.length; i++)
    {
    numArr.push(strArr[i].length);
    }
    return Math.max(...numArr);

}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

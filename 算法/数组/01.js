/**
 * 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回-1（需要区分大小写）。
 */

function firstNotReaptChar(str) {
  if(!str) return -1;

  let countMap = {} //记录出现的次数
  //遍历数组
  for(let i of str) {
    let count = countMap[i]
    if(count) {
      countMap[i] = count + 1;
    }else{
      countMap[i] = 1;
    }
  }
  for(let i in countMap) {
    if(countMap[i] === 1) {
      return i
    }
  }
  return -1;
}

console.log(firstNotReaptChar('22234444'))
function flat(arr) {
  const reg = /(\[|\])/g
  let str = JSON.stringify(arr)
  str.replace(reg,'')
  str = '[' + str + ']'
  return JSON.parse(str)
}

const arr = [1, [2, [3, [4, 5]]], 6];
console.log(flat(arr));
// let arr = [1, [2, [3, [4, 5]]], 6];
// function flatten(arr) {
//   let str = JSON.stringify(arr);
//   str = str.replace(/(\[|\])/g, '');
//   str = '[' + str + ']';
//   return JSON.parse(str); 
// }
// console.log(flatten(arr)); //  [1, 2, 3, 4，5]
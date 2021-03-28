//解答
//先把数组拍平
function flatten(arr) {
  let str = JSON.stringify(arr);
  str = str.replace(/\[|\]/g, '');
  str = '[' + str + ']';
  return JSON.parse(str); 
}

function TOPN(arr,N) {
  if(N > arr.length) throw Error('大于数组长度')
  const newArr = flatten(arr).sort((a,b) => b-a);
  console.log(arr);
  return newArr.slice(0,N)
}

//用例
const arr1 = [2, 4, 3]
const arr2 = [[1, 4, 3], [5, 5, 3],[5,7,8],[1,1]]

// 复杂度分析
//空间复杂度：O(n)
//时间复杂度：O(nlogn)
console.log(arr1.sort()); //  [1, 2, 3, 4，5]
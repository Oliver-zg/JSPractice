//冒泡排序
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }

  return array;
}
//插入排序
function insertSort(arr) {

}

function quickSort(arr) {
  let quick = (arr) => {
    if(arr.length <= 1) return arr;
    const pviot = arr[0];
    const left = [];
    const right = [];
    for(let i = 1;i<arr.length;i++) {
      let ele = arr[i]
      if(ele < pviot) {
        left.push(ele)
      }else if(ele >= pviot){
        right.push(ele)
      }
    }
    return quick(left).concat(pviot,quick(right));
  }
  const res = quick(arr)
  return res
}
const arr = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];
console.log(quickSort(arr));

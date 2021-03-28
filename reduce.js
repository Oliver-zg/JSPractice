Array.prototype.myReduce = function(callback,initValue) {
  if (this === null || this === undefiend) {
    throw new TypeError("Cannot read property 'map' of null")
  }
  let arr = this
  for(let i=0;i<arr.length;i++){
    initValue = callback(initValue,arr[i],i,arr)
  }
  return initValue
}

const max = [0,1,2,3,4,5,6].myReduce((x,y) => x > y ? x : y);
console.log(max);
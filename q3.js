
var permute = function(nums) {
  let result = [];
  const func = function(arr,temp){
      if(arr.length ==0){
          result.push(temp)
      }
      for(var i=0,len=arr.length;i<len;i++){
          let newArr = arr.slice(0,i).concat(arr.slice(i+1));
          func(newArr,temp.concat(arr[i]))
      }
  }
  func(nums,[]);
  return result;
}

const t1 = [1,2,3]
const t2 = [1,4,5,7,7]
console.log(permute(t2))
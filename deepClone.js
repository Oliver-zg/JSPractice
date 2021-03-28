const deepClone = (obj,hash = new WeakMap()) => {
  //如果是Date类型
  if(obj instanceof Date) return new Date(obj)
  //如果是RegExp类型
  if(obj instanceof RegExp) return new RegExp(obj)
  if(hash.has(obj)) return hash.get(obj) //如果map中存在该对象直接返回，避免循环引用
  //遍历传入参数所有键的特性
  let cloneObj = Object.create(Object.getPrototypeOf(obj),Object.getOwnPropertyDescriptor(obj))
  // let cloneObj = obj instanceof Array == true ? [] : {};
  hash.set(obj,cloneObj)
  //使用Reflect.ownKeys可以遍历对象的不可枚举属性以及Symbol
  for( let key of Reflect.ownKeys(obj)) {
    //Array，{}就递归
    if(typeof obj[key] == 'object' && typeof obj[key] !== 'function'  && obj[key] !== null){
      cloneObj[key] = deepClone(obj[key])
    }else{
      //基本数据类型、function就直接复制值
      cloneObj[key] = obj[key]
      
    }
  }
  return cloneObj;
}

//浅拷贝
function shallowCopy(target) {
  if(typeof target === 'object' && target != null) {
    let clone = Array.isArray(target) ? [] : {} 
    for(let prop in target) {
      if(target.hasOwnProperty(prop)) {
        clone[prop] = target[prop]
      }
    }
    return clone
  }else{
    return targetWS
  }
  

}
let obj = {
  num: 0,
  str: '',
  boolean: true,
  unf: undefined,
  nul: null,
  obj: { name: '我是一个对象', id: 1 },
  arr: [0, 1, 2,3],
  func: function () { console.log('我是一个函数') },
  date: new Date(0),
  reg: new RegExp('/我是一个正则/ig'),
  [Symbol('1')]: 1,
};
// Object.defineProperty(obj, 'innumerable', {
//   enumerable: false, value: '不可枚举属性' }
// );
let cloneObj = deepClone(obj)
let c = shallowCopy(obj)
c.obj.name =- '1'
console.log(obj)
// cloneObj.arr.push(10)
// cloneObj.date = new Date()
// console.log('obj', obj)
// console.log('cloneObj', cloneObj)

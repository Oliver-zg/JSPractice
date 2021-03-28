function newOperate(fn) {
  //错误处理
  if (fn !== 'function') {
    throw '第一参数必须是函数';
  }

  let newObj = Object.create(fn.prototype); //创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。 
  let result = fn.call(newObj, ...arguments);
  //是引用类型以及不为null
  let isObject = typeof result === 'object' && result !== null;
  //是函数
  let isFunction = typeof result === 'function';
  if (isObject || isFunction) {
    return result;
  }
  // 5.如果函数没有返回对象类型`Object`(包含`Functoin`, `Array`, `Date`, `RegExg`, `Error`)，那么`new`表达式中的函数调用会自动返回这个新的对象。
  return newObj;
}

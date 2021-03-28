

//实现bind
Function.prototype.myBind = function (obj, ...args) {
  //错误处理
  if(typeof this !== 'function'){
    throw new TypeError(this + 'must be a function');
  }
  const self = this; //保存当前调用此方法的函数
  //绑定一个函数
  let bindFn = function (...sarg) {
    let thisArg = null;
    //判断是否用了new 如果使用了new，原函数的this会是当前方法的实例,
    //但是实际上new绑定的优先级比bind高，所以应该让new生成对象的this绑定到此函数，而不是传进来的obj
    if(this instanceof bindFn) {
       // self可能是ES6的箭头函数，没有prototype，所以就没必要再指向做prototype操作。
      if(self.prototype){
        thisArg = this;
      }
    }else {
      thisArg = obj
    }
    return self.call(thisArg, ...args, ...sarg);
  };

  // self.call(this instanceof self? this : obj, ...args)

  bindFn.prototype = Object.create(self.prototype); //链接到原函数的prototype对象上
  return bindFn;  //返回绑定后的函数
};
let obj = {
  name: '张三',
  say: function () {
    // console.log(arguments);
    // console.log(this.name);
  },
};
let obj2 = {
  name: 'zg'
};

let clone = obj.say.myBind(obj2, 1, 2, 3); //myBind返回的是一个函数
let clone2 = obj.say.bind(obj2)
let ins = new clone() //new Clone的返回值是以原函数say构造器生成的新对象。原函数say的this指向这个新对象（myBind）。
let ins2 = new clone2()
console.log(Object.getPrototypeOf(clone)); //myBind{}
console.log(Object.getPrototypeOf(clone2)); //myBind{}
console.log(ins.__proto__); //say{} 实例的__proto__会指向原型对象
console.log(ins2.__proto__); //say{}

console.log(clone instanceof obj.say); //false
console.log(ins instanceof obj.say); //true  模拟new操作成功
console.log(ins2 instanceof obj.say); //true  模拟new操作成功

console.log(obj.say.prototype.isPrototypeOf(clone)); //flase 没用new时，不会指向say
console.log(obj.say.prototype.isPrototypeOf(ins)); //true
console.log(obj.say.prototype.isPrototypeOf(ins2)); //true

// clone();

//实现call
Function.prototype.myCall = function (obj, ...args) {
  if (obj == null || obj == undefined) {
    obj = 'window';
  }
  const fn = Symbol('myFn'); //定义一个不重复的常量
  //将不重复的属性给obj
  obj[fn] = this; //将当前函数设置为obj的属性
  let result = obj[fn](...args); //在obj的环境下执行要调用的函数
  //删除新增的属性
  delete obj[fn];
  return result; //返回执行结果
};

// obj.say.myCall(obj2);

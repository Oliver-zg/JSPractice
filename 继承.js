/**
 *  原型链继承
 */

// function Parent() {
//   this.name = '爸爸'
// }

// function Child() {
//   this.type = '我是儿子'
// }

// Child.prototype = new Parent()

// const c1 = new Child()
// const c2 = new Child()
// console.log(c.type);
// console.log(c.name);

/* 构造函数继承 */
// function Parent() {
//   this.name = '爸爸'
// }
// Parent.prototype.getName = () => {
//   return this.name
// }
// function Child() {
//   Parent.call(this)
//   this.type = '我是儿子'
// }

// const c = new Child()
// console.log(c.name);
// console.log(c.getName());

/* 组合继承 原型+构造函数*/
// function Parent() {
//   this.name = '爸爸';
// }
// Parent.prototype.getName = function () {
//   return this.name;
// };
// function Child() {
//   Parent.call(this);
//   this.type = '我是儿子';
// }
// Child.prototype = new Parent()
// Child.prototype.constructor = Child //重新挂一下prototype
// const c1 = new Child()
// const c2 = new Child()
// console.log(c1.getName());
// console.log(c2.type);
// console.log(Object.getPrototypeOf(c1));
/* 原型式继承 */
// function Parent() {
//   this.name = '爸爸';
// }

// Parent.prototype.getName = function () {
//   return this.name;
// };
 
// let child = Object.create(Parent)  //child.__proto___ =>Parent.prototype

// // function Child() {
// //   Parent.call(this);
// //   this.type = '我是儿子';
// // }
// console.log(child.getName());
//寄生继承
// let parent5 = {
//   name: "parent5",
//   friends: ["p1", "p2", "p3"],
//   getName: function() {
//     return this.name;
//   }
// };

// function clone(original) {
//   let clone = Object.create(original);
//   clone.getFriends = function() {
//     return this.friends;
//   };
//   return clone;
// }

// let person5 = clone(parent5);

// console.log(person5.getName());
// console.log(person5.getFriends());
//寄生组合式继承
function Parent() {
  this.name = '我是爸爸'
  this.mv = [1,2,3]
}
//原型上的方法
Parent.prototype.getName = function () {
  return this.name
}

function Child() {
  Parent.call(this) //构造函数继承 继承父类的属性 但继承不到原型上的方法
  this.name = '我是erzi'
}

child.prototype = Object.create(parent.prototype) //原型继承 继承不到构造函数的属性
child.prototype.constructor = child

//顺序要在原型继承之后，因为原型改变了
Child.prototype.getMv = function () {
  return this.mv
}


let c = new Child()
console.log(c.getMv());


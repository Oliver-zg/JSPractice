

//l为查找对象，r为参照
function myInstanceOf(l,r) {
  //非引用类型或者null 直接返回false
  if(typeof l !== 'object' || l === null) return false;

  const proto = Object.getPrototypeOf(l); //得到l的原型对象__proto__
  while(true) {
    //找到最上层还没有找到
    if(proto === null) {
      return false;
    }
    //找到了
    if(proto === r.prototype  ) {
      return true;
    }
    //还没找到，继续找到当前原型的原型
    proto = Object.getPrototypeOf(proto)
  }

}

const num = new String('123')
console.log(myInstanceOf(num,String));
console.log('/proxy/info/normal'.replace(/^\/proxy/, ''));
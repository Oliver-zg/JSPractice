// (function( ) {
//   let pond = []

//   //像事件池中注入方法
//   function subscribe(fn) {
//     if(!pond.includes(fn)) {
//       pond.push(fn)
//     }
//     //每一次执行，返回的方法是用来移除当前新增的这一项
//     return function unsubscribe() {
//       pond.splice(pond.indexOf(fn),1)
//     }
//   }
//   //通知事件池中的每个方法执行
//   subscribe.fire = function() {
//     pond.forEach(item => {
//       if(typeof item === 'function') {
//         item()
//       }
      
//     })
//   }
//   global.subscribe = subscribe
// })()

// let unsubscribe = global.subscribe(function() {console.log(1)})
// subscribe(function() {console.log(2)})
// subscribe(function() {console.log(3)})
// subscribe(function() {console.log(4)})
// unsubscribe()
// setTimeout(() => global.subscribe.fire(),1000)

function argsAsArray(fn, arr) {
  return fn(...arr)
}

const fn = function (greeting, name, punctuation) {return greeting + ', ' + name + (punctuation || '!');}
const arg = ['Hello', 'Ellie', '!']

console.log(argsAsArray(fn,arg));
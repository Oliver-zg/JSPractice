
var tree = {
  value: 2,
  left: {
   value: 3,
   left: {
    value: 2
   }
  },
  right: {
   value: 2,
   left: {
    value: 2,
    left: {
     value: 2
    },
    right: {
     value: 2
    }
   },
   right: {
    value: 2
   }
  }
 } 
 let treeNodes = []
 function treeDfs(t) {
    Object.keys(t).forEach(item => {
      console.log(typeof t[item]);
      if(typeof t[item] === 'number') {
        treeNodes.push(t[item])
      }
      treeDfs(t[item])
    })
 }
 treeDfs(tree)
 console.log(treeNodes);

// let a = [];
// var preOrder = function (node) { 
//   if (node) { 
//   if(a.length === 0) {
//     a.push(node.value)
//   }
//   if(a.length === 1) {
//     if(node.value > a[0])  {
//       a.unshift(node.value)
//     }else if(node.value < a[0]){
//       a.push(node.value)
//     }
//   }
//   if(a.length === 2) {
//     //当前元素大于最小值小于最二小值
//     if(node.value > a[1] && node.value < a[0]) {
//       a.splice(0,1,node.value)
//     }
//     if(node.value < a[1]) {
//       a.pop()
//       a.push(node.value)
//     }
//   }
//   // console.log(a);
//    preOrder(node.left);
//    preOrder(node.right);
//   }
//  }
 
//  preOrder(tree)
//  console.log(a);
function map(entry) {
  const obj = {};
  for (const key in entry) {
    const keymap = key.split('.');
    // console.log(keymap,entry[key]);
    set(obj, keymap, entry[key])
  }
  return obj;
}
//map key数组
//obj 需要输出的对象
function set(obj, keys, val) {
  let tmp; 
  //如果obj不存在当前key值，则新建一个对象
  if (!obj[keys[0]]) {
    obj[keys[0]] = {};
  }
  tmp = obj[keys[0]]; //对象的引用
  for (let i = 1; i < keys.length; i++) {
    if (!tmp[keys[i]]) {
      tmp[keys[i]] = keys.length - 1 === i ? val : {};
    }
    tmp = tmp[keys[i]];
  }
}

function flatObj(obj,parentKey='',result={}) {
  for(let item in obj) {
    // console.log(obj);
    if(obj.hasOwnProperty(item)) {
      let keyName = `${parentKey}${item}`
      if(typeof obj[item] == 'object') {
        flatObj(obj[item],keyName+'.',result)
      }else{
        result[keyName] = obj[item]
      }
    }
  }
  return result;
}
const entrx = {
  a: {
    b: {
      c: {
        dd: 'abcdd'
      }
    },
    d: {
      xx: 'adxx'
    },
    e: 'ae'
  }
}

const entry = {
  'a.b.c.dd': 'abcdd',
  'a.d.xx': 'adxx',
  'a.e': 'ae'
}
// console.log(map(entry));
console.log(flatObj(entrx));

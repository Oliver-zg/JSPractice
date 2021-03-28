function promise(executor) {
  var self = this;
  self.status = 'pending' //初始为pending状态
  self.data = undefined; //promise的值
  self.onResolvedCallback = [] //resolve的回调函数
  self.onRejectedCallback = [] //reject的

  function resolve(value) {
    self.status = 'resolved';
    self.data = value
    for (let index = 0; index < self.onResolvedCallback.length; index++) {
      self.onResolvedCallback[index](value);
    }
  }
  function reject(reason) {
    self.status = 'rejected';
    self.data = reason
    for (let index = 0; index < self.onRejectedCallback.length; index++) {
      self.onRejectedCallback[index](reason);
    }
  }

  try {
    executor(resolve, reject)
  } catch (reason) {
    reject(reason)
  }
}

function resolvePromise(promise2,x,resolve,reject) {
  
}
Promise.prototype.then = function(onResolved,onRejected) {
  const self = this;
  let promise2;
  onResolved = typeof onResolved === 'function' ? onResolved : function(v) {};
  onRejected = typeof onRejected === 'function' ? onRejected : function(r) {};
  if(self.status === 'resolved') {
    return promise2 = new Promise(function(resolve,reject) {
      try {
        const x = onResolved(self.data)
        //如果返回值是promise，取他的结果为promise2的结果
        if(x instanceof Promise) {
          x.then(resolve,reject)
        }
        resolve(x)
      } catch (error) {
        reject(error)
      }
    })
  }
  if(self.status === 'rejected') {
    return promise2 = new Promise(function(resolve,reject) {
      try {
        const x = onRejected(self.data)
        //如果返回值是promise，取他的结果为promise2的结果
        if(x instanceof Promise) {
          x.then(resolve,reject)
        }
      } catch (error) {
        reject(error)
      }
    })
  }
  //待定状态
  if(self.status === 'pending') {
    return promise2 = new Promise(function(resolve,reject) {
      self.onResolvedCallback.push(function(value) {
        try {
          var x = onResolved(self.data)
          if (x instanceof Promise) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })
      self.onRejectedCallback.push(function(reason) {
        try {
          var x = onRejected(self.data)
          if (x instanceof Promise) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })
    })
  }
}
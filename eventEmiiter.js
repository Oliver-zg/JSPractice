function EventEmiiter() {
  this.__events = {};
}

EventEmiiter.VERSION = '1.0.0';

EventEmiiter.prototype.on = function (eventName, listenr) {
  if (!eventName || !listener) return;
  // 判断回调的 listener 是否为函数
  if (!isValidListener(listener)) {
    throw new TypeError('listener must be a function');
  }

  const events = this.__events;
  let listeners = events[eventName] || [];
  let listenerIsWrapped = typeof listener === 'object';
  // 不重复添加事件，判断是否有一样的
  if (indexOf(listeners, listener) === -1) {
    listeners.push(
      listenerIsWrapped
        ? listener
        : {
            listener: listener,
            once: false,
          }
    );
  }
  return this;
};

// 判断是否是合法的 listener
function isValidListener(listener) {
  if (typeof listener === 'function') {
      return true;
  } else if (listener && typeof listener === 'object') {
      return isValidListener(listener.listener);
  } else {
      return false;
  }
}
// 顾名思义，判断新增自定义事件是否存在
function indexOf(array, item) {
  var result = -1
  item = typeof item === 'object' ? item.listener : item;
  for (var i = 0, len = array.length; i < len; i++) {
      if (array[i].listener === item) {
          result = i;
          break;
      }
  }
  return result;
}

EventEmitter.prototype.emit = function(eventName, args) {
  // 直接通过内部对象获取对应自定义事件的回调函数
  var listeners = this.__events[eventName];
  if (!listeners) return;
  // 需要考虑多个 listener 的情况
  for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      if (listener) {
          listener.listener.apply(this, args || []);
          // 给 listener 中 once 为 true 的进行特殊处理
          if (listener.once) {
              this.off(eventName, listener.listener)
          }
      }
  }
  return this;
};
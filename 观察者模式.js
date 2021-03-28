//观察者
class Observer {
  update(msg) {
    console.log(msg+'123');
  }
}

class ObserverList {
  constructor() {
    this.observerList = [];
  }
  add(observer) {
    this.observerList.push(observer);
    return this;
  }
  remove(observer) {
    this.observerList.splice(this.observerList.indexOf(observer), 1);
    return this;
  }
  get(index) {
    return this.observerList[index];
  }
  count() {
    return this.observerList.length;
  }
}

class Subject {
  obs = new ObserverList();
  add(observer) {
    this.obs.add(observer)
  }
  remove(observer) {
    this.remove(observer)
  }
  notify(...params) {
    for (let index = 0; index < this.obs.count(); index++) {
      const element = this.obs.observerList[index];
      element.update(...params)
    }
  }
}

let sub = new Subject()
sub.add(new Observer())
sub.notify('Hellow')

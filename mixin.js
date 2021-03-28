/* function mixin(sobj,tobj) {
  for(var key in sobj) {
    if(!(key in tobj)) { //什么都不存在的情况下复制
      tobj[key] = sobj[key];
    }
  }
  return tobj;
}


var vehicle = {
  engines: 1,
  ignition: function() {
    console.log("点火器点着了");
  },
  drive: function() {
    this.ignition();
    console.log('发车啦');
  }
}

var car = mixin(vehicle, {
  wheels: 4,
  drive: function() {
    // vehicle.drive();
    vehicle.drive.call(this);
    console.log('轮子开始走了');
  }
})

var a = mixin(vehicle, {})

// vehicle.drive()
car.drive()
// a.drive() */


function Vehicle() {
  this.engines = 1;
}

Vehicle.prototype.ignition = function() {
  console.log('打开引擎');
};
Vehicle.prototype.drive = function() {
  this.ignition();
  console.log('开始走');
};

function Car() {
  var car = new Vehicle(); //实例化一个Vehicle对象
  car.wheels = 4; //加入新的属性
  var vehDrive = car.drive; //维持一个函数drive的引用
  car.drive = function() { //重写drive 
    // vehDrive(); 
    vehDrive.call(this); //绑定到当前this
    console.log(this.wheels + 'running');
  }
  return car;
}

var  aCar = new Car();
aCar.drive();
aCar.ignition();

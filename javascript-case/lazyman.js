// 实现一个lazyman类,具备以下的功能

class LazyManClass {
  constructor(name) {
    this.taskList = [];
    this.name = name;
    console.log(`Hi I am ${this.name}`);
    setTimeout(() => {
      this.next();
    }, 0);
  }
  eat(name) {
    let that = this;
    let fn = (function(n) {
      return function() {
        console.log(`I am eating ${n}`);
        that.next();
      };
    })(name);
    this.taskList.push(fn);
    return this;
  }
  sleepFirst(time) {
    let that = this;
    let fn = (function(t) {
      return function() {
        setTimeout(() => {
          console.log(`等待了${t}秒...`);
          that.next();
        }, t * 1000);
      };
    })(time);
    this.taskList.unshift(fn);
    return this;
  }
  sleep(time) {
    let that = this;
    let fn = (function(t) {
      return function() {
        setTimeout(() => {
          console.log(`等待了${t}秒`);
          that.next();
        }, t * 1000);
      };
    })(time);
    this.taskList.push(fn);
    return this;
  }
  next() {
    let fn = this.taskList.shift();
    fn && fn();
  }
}

function LazyMan(name) {
  return new LazyManClass(name);
}

LazyMan("wd")
  .eat("rice")
  .eat("dinner")
  .sleepFirst(5)
  .sleep(4)
  .eat("junk food");

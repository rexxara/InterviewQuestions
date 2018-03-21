function xiaoming(params) {
  if (!(this instanceof xiaoming)) {
    return new xiaoming();
  }
  this.tasks = [];
  this.name='xiaoming'
}

let taskify = function(func) {
  return function(...args) {
    let lastTask = this.tasks[0] ? this.tasks.shift() : Promise.resolve();
    this.tasks.push(lastTask.then(func.bind(this, ...args)));
    return this;
  };
};

xiaoming.prototype.eat = taskify(function(thing) {
  console.log(`${this.name} eats ${thing}`);
});

xiaoming.prototype.sleep = taskify(function(n) {
  console.log('sleep')
  return new Promise(resolve => setTimeout(resolve, n))
});

xiaoming().eat('apple').sleep(2000).eat('dick')

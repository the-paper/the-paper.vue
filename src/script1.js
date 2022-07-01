let handler = {
  get: function(target, name) {
    return name in target?
      target[name] :
      37;
  },
};

let p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b);
console.log('c' in p, p.c);


let x = new Proxy({}, {});
x.a = 10;
x.b = null;

console.log(x.a)
console.log(x.b)
console.log(x.c)

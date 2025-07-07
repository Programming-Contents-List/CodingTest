const test = function test(n) {
  return Math.trunc(n);
};

const test2 = function test(n) {
  return Math.floor(n);
};

console.log(test(10.8));
console.log(test2(-1.1));

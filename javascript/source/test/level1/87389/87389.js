const n = 10;

const result = function solution(n) {
  console.log(n);
  var min = 0;
  // var answer = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 1) {
      min = i;
      break;
    }
    // console.log(min)
  }
  return min;
};

console.log(result(n));

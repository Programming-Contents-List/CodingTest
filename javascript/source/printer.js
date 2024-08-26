let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\r\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출
let temp = input.map(el => el.split(' ').map(Number));
let N = temp[0];
// console.log(N);

temp.shift();
let arr = temp;
// console.log(arr);

arr.sort((a, b) => {
  if (a[0] === b[1]) {
    return a[0] - b[1];
  } else {
    return a[1] - b[0];
  }
});
console.log(arr);

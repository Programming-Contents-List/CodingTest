let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\r\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

let temp = input.map(el => el.split(' ').map(Number));
console.log(temp[0], temp[1]);

let arr = temp[1]
arr.sort((a, b) => a - b);
console.log(arr);
let result = 0;

arr.forEach(el => {
  let temp = el;
  temp += el;
  result += temp;
});
console.log(result);
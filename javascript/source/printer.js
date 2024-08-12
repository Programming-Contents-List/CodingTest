let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().split('\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');  //백준 제출
console.log(input);

let arr = [];
for (let i = 0; i < input.length; i++) {
  if (!arr.includes(input[i])) {
    arr.push(input[i]);
  }
}

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    //for (let j = 0; j < arr.length - 1 - i; j++) { // 내부 반복문에서 비교 범위 감소
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}

console.log(arr);
arr.forEach(element => console.log(element));
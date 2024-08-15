let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');  //백준 제출
console.log(input);
input.shift();
const arr = input.sort((a, b) => a - b);  //암묵적으로 숫자로 형변환
arr.forEach(element => console.log(element));

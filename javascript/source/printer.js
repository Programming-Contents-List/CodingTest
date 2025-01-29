let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\r\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출
let arr = input.map(el => el.split(' '));
let N = arr[0][0] - 1;
let X = arr[0][1] - 1;
let score = arr[1];
console.log(N, X);
score.sort((b, a) => a - b);
console.log(score[X]);
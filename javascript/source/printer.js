let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');  //백준 제출

let temp = input.map(el => el.split(' '));
// console.log(temp);
let arr = temp[1];
let v = temp[2];
// console.log(v);
let result = arr.filter(el => el == v).length;
console.log(result);
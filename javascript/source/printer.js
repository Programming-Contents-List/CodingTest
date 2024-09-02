let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');  //'\r\n'
//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');  //백준 제출

// let N = input[0]//.map(el => el.split(' '));
let N = input.shift();
let arr = input.map(el => el.split(' '));
let arrA = arr.slice(0, 3);
let arrB = arr.slice(3);
// console.log(arr);
// arr.map(el => console.log(el));
let result = [];
arrA.map((el, i) => {
  let row = [];
  el.map((el, j) => {
    row.push(parseInt(el) + parseInt(arrB[i][j]));
    // console.log(parseInt(el) + parseInt(arrB[i][j]))
  });
  result.push(row);
});
// console.log(result);
result.forEach(el => console.log(el.join(' ')));
// result.forEach(el => console.log(el.join(' ')));
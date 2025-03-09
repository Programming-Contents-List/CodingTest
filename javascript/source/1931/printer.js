let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\r\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출
let temp = input.map(el => el.split(' ').map(Number));
//const [n, ...arr] = input;  //shift()미사용
let N = temp[0];
temp.shift();
let arr = temp;
let cnt = 0;
let result = 0;
//최소값
// let min = Math.max(...arr.flat()); //flat은 모든 배열을 평탄화 시킨다.

arr.sort((a, b) => {
  console.log(a[1], b[1]);
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

arr.forEach(el => {
  if (el[0] >= cnt) {
    result++;
    cnt = el[1];
  }
})

console.log(result);

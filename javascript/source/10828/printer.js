let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\r\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

let arr = input.map(el => el.trim().split(' '));
let N = input.shift();
//split은 배열로 반환을 한다.
let temp = [];

arr.map((el) => {
  let idx = temp.length;
  if (el.length > 1 && el[0] === 'push') {
    temp.push(el[1]);
  } else if (el[0] === 'pop' && idx !== 0) {
    console.log(temp.pop());
  } else if (el[0] === 'pop' && idx === 0) {
    console.log(-1)
  } else if (el[0] === 'size') {
    console.log(temp.length);
  } else if (el[0] === 'top' && idx !== 0) {
    console.log(temp[idx - 1]);
  } else if (el[0] === 'top' && idx === 0) {
    console.log(-1);
  } else if (el[0] === 'empty' && idx !== 0) {
    console.log(0)
  } else if (el[0] === 'empty' && idx === 0) {
    console.log(1)
  }
  // console.log(temp);
})
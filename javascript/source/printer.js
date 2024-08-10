let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().split('\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');  //백준 제출

let N = parseInt(input[0]);
console.log(N);
let arr = input[1].trim().split(' ').map(Number);
console.log(arr);
let V = parseInt(input[2]);;
console.log(V);
let result = 0;
//V가 arr안에 있는지 확인을 한다. 결과물은 V가 arr몇번째에 있는지 찾는 것이다.

for (let i = 0; i < arr.length; i++) {
  if (V === arr[i]) {
    result = i;
    break;
  }
}
console.log(result);

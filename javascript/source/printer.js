let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().split('\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');  //배준 제출

let [n, k] = input[0].trim().split(' ').map(Number);
console.log(n, k);
let values = input[1].trim().split(' ').map(Number);
console.log(values);

for (let i = 0; i < k; i++) { //기준이 되는 배열
  let swapped = false;
  for (let j = 0; j < n - 1; j++) { //for (let j = 0; j < values.length; j++) {
    if (values[j] > values[j + 1]) {  //if (values[j] < values[n - 1]) {
      [values[j], values[j + 1]] = [values[j + 1], values[j]];
      let swapped = true;
    }
  }
  if (!swapped) break;
}
console.log(values.join(' '));  // 상위 k개의 값을 출력
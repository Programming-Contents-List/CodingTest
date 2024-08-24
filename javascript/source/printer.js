let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출
let N = [500, 100, 50, 10, 5, 1];
let paid = 1000;
let price = input[0];
let charge = paid - price;
console.log(charge);

for (let i = 0; i < N.length; i++) {
  if (charge > N[i]) {
    charge -= N[i];
    console.log('used -', N[i]);
    console.log('current', charge);
  }
  if (charge === 0) {
    break;
  }
}
console.log('done');
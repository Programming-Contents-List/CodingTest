const { stat } = require('fs');
let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let [N, ...input] = require('fs').readFileSync(inputPath).toString().trim().split('\n');  //\r\n
//let [N, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

console.log(input);
let count = 0;
let state = false;
let stack = [];
//연속적이면 ok
//ab 다음 a가 나오면 not ok 따라서, abb는 not group
input.map(el => {
  el.map((el, index) => {
    if (state != true) {
      if (stack.length === 0) {
        stack.push(+el[index]);
        console.log(stack);
      } else if (stack[index] === +el[index + 1]) {
        let what = stack.pop();
        console.log(what);
      }
    }
  })
})
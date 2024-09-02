let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\r\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');  //백준 제출

//문제에서 상근이는 최소한의 봉지를 배달 해야한다.
//한 봉지에 최대로 담을 수 있어야한다. max = 5
let N = +input[0];
let max = 5;
let min = 3;
let result = 0;

console.log(N % max);

//N은 항상 양수여야 한다.
while (N > 0) {
  //Max값을 기준으로 항상 계산이 되어야 한다.
  if (N % max === 0) {
    //여기서 N % max가 너머지가 0이 되는 결과 값이 실수로 계산이 되어서 0이 되는 과정의 결과여도 답을 도출하는 것엔 무관하다.
    result++;
    N -= max; //상근이가 옮긴 kg값은 제외되어야 한다.
  } else if (N % min === 0) {
    result++;
    N -= min;
  } else {
    result = -1;
    console.log(result);
    return -1;
  }
}
console.log(result);
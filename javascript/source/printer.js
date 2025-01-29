let path = require("path");
let inputPath = path.join(__dirname, "/dev/stdin"); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require("fs").readFileSync(inputPath).toString().trim();
// .split("\r\n");
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출
// console.log(input);
let N = Number(input);

let dp = [0, 0];
let i = 2;

while (i <= N) {
  dp[i] = dp[i - 1] + 1;
  if (i % 3 === 0) {
    // dp[i] = dp[i + 1] / 3;
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    //dp[i]와 dp[i / 3] + 1(1 = 다음 index) 둘을 비교해서 최소값 설정
  }
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
  i++;
}

console.log(dp[N]);

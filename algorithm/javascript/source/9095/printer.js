let path = require("path");
let inputPath = path.join(__dirname, "../dev/stdin"); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require("fs").readFileSync(inputPath).toString().trim().split("\n");
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

const N = input.shift();
const array = input.map(Number);
const maxN = Math.max(...array); // 입력 중 가장 큰 숫자까지만 dp를 계산하면 됨
const dp = new Array(maxN + 1).fill(0);

dp[1] = 1; // 1을 만들 수 있는 경우의 수: [1]
dp[2] = 2; // 2를 만들 수 있는 경우의 수: [1+1], [2]
dp[3] = 4; // 3을 만들 수 있는 경우의 수: [1+1+1], [1+2], [2+1], [3]

for (let i = 4; i <= maxN; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

// 입력된 각 숫자에 대해 결과 출력
const result = array.map((n) => dp[n]).join("\n");
console.log(result);

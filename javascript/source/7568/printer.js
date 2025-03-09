let path = require("path");
let inputPath = path.join(__dirname, "../dev/stdin"); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require("fs").readFileSync(inputPath).toString().trim().split("\n");
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

let n = Number(input.shift());
let array = input.map((el) => el.split(" ").map(Number)); // [몸무게, 키] 배열
let ranks = Array(n).fill(1); // 초기 등수는 모두 1로 설정
let stack = []; // 비교한 사람들을 저장

// 모든 요소를 순회하면서 덩치 비교
while (array.length > 0) {
  let [weight, height] = array.pop(); // 배열에서 한 사람을 꺼냄
  let currentRank = 1;

  // 스택에서 모든 요소와 비교
  for (let [w, h] of [...array, ...stack]) {
    if (w > weight && h > height) {
      currentRank++; // 몸무게와 키 모두 큰 경우 등수 증가
    }
  }

  stack.push([weight, height]); // 비교한 사람을 스택에 추가
  ranks[array.length] = currentRank; // 현재 사람의 등수 저장
}

console.log(ranks.join(" "));

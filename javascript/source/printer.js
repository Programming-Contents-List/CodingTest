let path = require("path");
let inputPath = path.join(__dirname, "/dev/stdin"); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require("fs").readFileSync(inputPath).toString().trim().split("\n"); //\r\n
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n'); //백준 제출
input.shift(); // 첫 번째 요소(단어 개수)를 제거

let count = 0; // 그룹 단어 개수

for (let i = 0; i < input.length; i++) {
  let word = input[i];
  let seen = new Set(); // 이미 등장한 문자들을 저장
  let isGroupWord = true;

  for (let j = 0; j < word.length; j++) {
    // 존재하는 단어(문자)인지 확인(예외처리)하는 조건문
    if (seen.has(word[j]) && word[j] !== word[j - 1]) {
      // 이미 등장한 문자(seen.has(word[j]))이고 이전 문자(word[j] !== word[j - 1)와 다르면 그룹 단어가 아님
      isGroupWord = false;
      break;
    }
    //만약 없다면 단어(문자)를 저장한다.
    seen.add(word[j]); // 현재 문자를 기록
  }

  if (isGroupWord) {
    //true라면 체크
    count++; // 그룹 단어라면 카운트 증가
  }
}

console.log(count);

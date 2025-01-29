let path = require("path");
let inputPath = path.join(__dirname, "/dev/stdin"); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require("fs")
  .readFileSync(inputPath)
  .toString()
  .trim()
  .split("\r\n");
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

// 입력된 숫자들을 곱한 결과 계산
let sum = 1;
input.forEach((el) => {
  sum *= Number(el);
});

// 결과를 문자열로 변환하여 각 자릿수를 배열로 분리
let array = String(sum).split("");

// 0부터 9까지 숫자의 빈도를 저장할 배열
let result = new Array(10).fill(0);

// 각 자릿수를 카운트
array.forEach((el) => {
  result[Number(el)] += 1;
});

// 결과 출력
result.forEach((el) => console.log(el));

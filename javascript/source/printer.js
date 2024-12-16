let path = require("path");
let inputPath = path.join(__dirname, "/dev/stdin"); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require("fs")
  .readFileSync(inputPath)
  .toString()
  .trim()
  .split("\r\n");
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

console.log(input);
let limit = Number(input.shift());
let array = input.map((el) => el.split(" ").map(Number));

// 젤리 방향 설정
let dir = [
  [0, 1],
  [1, 0],
];

// 방문 여부 가능 크기 - array 크기와 동일하게 생성
let n = array.length; // 행 개수
let m = array[0].length; // 열 개수
// 방문 여부 기록
let stack = [[0, 0]]; // 시작 지점 (0, 0)
let visited = Array.from({ length: n }, () => Array(n).fill(false));
visited[0][0] = true;

console.log(visited);

let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().split('\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');  //백준 제출
let [N, M] = input[0].trim().split(' ').map(Number);
let A = input.slice(1, 4).map(row => row.trim().split(' ').map(Number));
let B = input.slice(4, 7).map(row => row.trim().split(' ').map(Number));
//배열 초기 값
let arr = new Array(N);
for (let i = 0; i < N; i++) {
  arr[i] = new Array(M);
}

// console.log(A, B);
//2738문제의 A와 B를 나누는 기누은 N과 M을 곱한(N*M)의 각 크기만큼이다. 이점을 유의 해서 문제를 접근해야한다.
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    arr[i][j] = A[i][j] + B[i][j];
  }
}

arr.forEach(element => console.log(element.join(' ')));
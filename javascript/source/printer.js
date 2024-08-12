let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().split('\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');  //백준 제출

let [N, M] = input[0].trim().split(' ').map(Number);
//왜 map을 slice를 사용해서 변수값을 정의하는 방법과 new Array를 사용해서 크기를 지정하는 방식의 차이가 무엇인지 설명
// let A = input.slice(1, 4).map(row => row.trim().split(' ').map(Number));
// let B = input.slice(4, 7).map(row => row.trim().split(' ').map(Number));
//배열 초기 값
let arr = [];

// console.log(A, B);
//2738문제의 A와 B를 나누는 기누은 N과 M을 곱한(N*M)의 각 크기만큼이다. 이점을 유의 해서 문제를 접근해야한다.
for (let i = 0; i < N; i++) {
  let row = [];
  for (let j = 0; j < M; j++) {
    // let result = A[i][j] + B[i][j];
    //왜 i+1, i+1+N 을 지정해야하는 설명
    let A = parseInt(input[i + 1].trim().split(' ')[j]);
    let B = parseInt(input[i + 1 + N].trim().split(' ')[j]);
    row.push(A + B);
    //trim과 split을 사용해야하는 이유
    // console.log('a+b: ', B);
    // row.push(result);
  }
  arr.push(row);
}

arr.forEach(element => console.log(element.join(' ')));

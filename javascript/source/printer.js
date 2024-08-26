let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\r\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출
let temp = input.map(el => el.split(' ').map(Number));
let N = temp[0];
// console.log(N);

temp.shift();
let arr = temp;
// console.log(arr);

arr.sort((a, b) => {
  console.log('a, b', a, b);
  //조건이 주어졌을 경우 a,b는 이미 sort가 진행중이 과정에서 최적화로 인해 비교 값이 내가 예상한 것과 다르게 나온다.
  //하지만 기본적으로 a와 b는 뒤, 앞의 값을 가지고 서로 비교를 한다.
  //예를들어 1,2,3,4,5와 같은 배열있으면 a는 2, b는 1을 가지고 서로 비교하는게 기본적이다.
  /**
   * a, b [ 3, 5 ] [ 1, 4 ]
  a, b [ 0, 6 ] [ 3, 5 ]
  a, b [ 5, 7 ] [ 0, 6 ]
  a, b [ 3, 8 ] [ 5, 7 ]
  a, b [ 5, 9 ] [ 3, 8 ]
  a, b [ 6, 10 ] [ 5, 9 ]
  a, b [ 8, 11 ] [ 6, 10 ]
  a, b [ 8, 12 ] [ 8, 11 ]
  a, b [ 2, 13 ] [ 8, 12 ]
  a, b [ 12, 14 ] [ 2, 13 ]
   * 
   */

  // if (a[0] === b[1]) {
  //   return a[0] - b[1];
  // } else {
  //   return a[1] - b[0];
  // }
});
// console.log(arr);

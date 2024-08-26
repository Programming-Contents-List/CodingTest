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

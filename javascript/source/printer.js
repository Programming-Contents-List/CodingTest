let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');  //'\r\n'
//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');  //백준 제출

/** keyWord
  * slice
  * split : 반환값 array
  * map : callback(callback함수(x) 모든 callback임)의 결과물인 새로운 배열(new array)
  * shift를 재활용 할 수 있는 코드 방식
  * join
*/
//참고로 해당 문제는 2차원 배열이 맞다 왜냐하면 배열과 문자열이 합쳐졌기 때문이다.
// console.log(input);

//shift를 재활용 할 수 있는 코드 방식
let [N, M] = input.shift().split(' ').map(Number);
//el값 출력 해볼 것
let arrA = input.slice(0, N).map(el => el.split(' ').map(Number)
  // {
  // console.log(Array.isArray(el));  //[['1','1','1']...](x) //1 1 1 2 2 2 3 3 3(o)
  // el.split(' ').map(Number);
  // }
);
// console.log(arrA);
let arrB = input.slice(N).map(el => el.split(' ').map(Number));
//row값 출력 해볼 것
let result = arrA.map((row, i) =>
  row.map((value, j) => value + arrB[i][j])
);

result.forEach(el => console.log(el.join(' ')));
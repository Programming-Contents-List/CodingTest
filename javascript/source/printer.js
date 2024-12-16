let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');  //'\r\n'
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출
const board = input.map((el) => el.split(" ").map(Number)); // 숫자판 생성
const uniqueNumbers = new Set(); // 중복 제거를 위한 Set
const directions = [
  [-1, 0], // 위
  [1, 0],  // 아래
  [0, -1], // 왼쪽
  [0, 1],  // 오른쪽
];

let N = input.shift();
let arr = input[0].split(' ').map(el => +el);
// arr.reverse();
// console.log(arr);
// let compare = arr.reverse();
// console.log(compare);
// let NGE;
let result = [];
let temp = []; //index 정보 따라서 arr[i]보다 늦게 동작해야함.(= index, stack)
for (let i = 0; i < N; i++) {
  //&& arr[temp[temp.length - 1] -> 초기값 temp 변수를 index 배열로 초기화
  // = let topIndex = temp[temp.length - 1];  // 스택의 마지막 인덱스 추출
  //결론: temp[temp.length - 1]는 Number이다. 즉, 초기값은 index 3이며 3을 참조하는 값은 7이다.
  while (temp.length && arr[temp[temp.length - 1]] < arr[i]) {
    console.log(temp[temp.length - 1]);
    console.log(temp);
    result[temp.pop()] = arr[i]; //stack에서 pop을 해도 index 값이 pop되기 때문에 반환값 역시 number이다.
  } //while문 중괄호
  //for문 영역
  temp.push(i);  //stack에 i가 들어감 이유는 배열의 크기를 맞추기 위해
}
//결론적으로 index값을 가지고 있는 배열과 값을 가지고 있는 본래의 배열을 가지고 동작한다.
while (temp.length) {
  result[temp.pop()] = -1;
}

console.log(result.join(' '));

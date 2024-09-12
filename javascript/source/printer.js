let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');  //'\r\n'
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

let N = input.shift();
let arr = input[0].split(' ').map(el => +el);
// arr.reverse();
// console.log(arr);
// let compare = arr.reverse();
// console.log(compare);
// let NGE;
let temp = [];
let stack = []; //index 정보 따라서 arr[i]보다 늦게 동작해야함.
for (let i = 0; i < N; i++) {
  //&& arr[stack[stack.length - 1] -> 초기값 stack 변수를 index 배열로 초기화
  // = let topIndex = stack[stack.length - 1];  // 스택의 마지막 인덱스 추출
  //결론: stack[stack.length - 1]는 Number이다. 즉, 초기값은 index 3이며 3을 참조하는 값은 7이다.
  while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
    temp[stack.pop()] = arr[i]; //stack에서 pop을 해도 index 값이 pop되기 때문에 반환값 역시 number이다.
  }
  stack.push(i);  //stack에 i가 들어감 이유는 배열의 크기를 맞추기 위해
}

while (stack.length) {
  temp[stack.pop()] = -1;
}

console.log(temp.join(' '));
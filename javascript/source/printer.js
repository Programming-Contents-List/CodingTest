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
let result = [];
let temp = []; //index 정보 따라서 arr[i]보다 늦게 동작해야함.(= index, stack)
for (let i = 0; i < N; i++) {
  //&& arr[temp[temp.length - 1] -> 초기값 temp 변수를 index 배열로 초기화
  // = let topIndex = temp[temp.length - 1];  // 스택의 마지막 인덱스 추출
  //결론: temp[temp.length - 1]는 Number이다. 즉, 초기값은 index 3이며 3을 참조하는 값은 7이다.
  for (let j = temp.length - 1; j >= 0; j--) {
    if (arr[temp[j]] < arr[i]) {
      console.log(temp[j]);
      console.log(temp);
      result[temp.pop()] = arr[i]; // stack에서 pop을 해도 index 값이 pop되기 때문에 반환값 역시 number이다.
    } else {
      break; // 조건을 만족하지 않으면 더 이상 탐색할 필요가 없으므로 중단
    }
  } //while문 중괄호
  //for문 영역
  temp.push(i);  //stack에 i가 들어감 이유는 배열의 크기를 맞추기 위해
}
//결론적으로 index값을 가지고 있는 배열과 값을 가지고 있는 본래의 배열을 가지고 동작한다.
while (temp.length) {
  result[temp.pop()] = -1;
}

console.log(result.join(' '));
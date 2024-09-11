let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');  //'\r\n'
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

let N = input.shift();
let arr = input[0].split(' ').map(el => +el);
// arr.reverse();
console.log(arr);
// let compare = arr.reverse();
// console.log(compare);
let NGE;
let temp = [];
let i = 0;
while (i < arr.length) {
  // NGE = arr.pop();  //뒤에서 부터 pop이되는 걸 확인할 수 있음 따라, reverse 해야함
  // let current = arr.shift();  // 첫 번째 값을 꺼내고 배열에서 제거
  let found = false;
  for (let j = 0; j < arr.length; j++) {
    //비교한 값은 다시 비교가 되지 않게 shift가 되면서 사라져야함.
    if (arr[i] < arr[j]) {
      NGE = arr[j];
      temp.push(NGE);
      found = true;
      break;
    }
  }
  if (!found) temp.push(-1);
  i++;
}
console.log(temp);
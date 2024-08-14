let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');  //백준 제출
//trim이 왜 입력값에서만 사용되어야 하는가?
//왜 pop(O(1))은 틀리고 shift(O(n))는 맞는가? 어떤게 더 메모리 낭비인가?
console.log(input);
input.shift();
const arr = input.sort((a, b) => a - b);  //암묵적으로 숫자로 형변환
// arr.pop();
//filter는 어떤 값을 반환하는가? element는 해당 배열의 값을 반환한다. index는 해당 배열의 차례 값을 반환한다.
//indexOf는 무엇인가? 인자로 가지고 있는 요소의 차례 값을 반환한다. 즉, sort 이후의 '2'요소는 1번째를 가리킨다. 따라서 indexOf는 해당 배열을 0에서부터 끝까지 탐색 작업이 이루어지는데 5번째에 있는 '5'요소는 탐색 우선 순위에서  배제가 되며 4번째의 5요소만을 계혹해서 참조하게 된다.
arr.forEach(element => console.log(element));
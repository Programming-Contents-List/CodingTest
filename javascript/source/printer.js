let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\r\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');  //백준 제출

//문제에서 상근이는 최소한의 봉지를 배달 해야한다.
//한 봉지에 최대로 담을 수 있어야한다. max = 5
let N = +input[0];
let max = 5;
let min = 3;
let result = 0;

// console.log(N % min);

//N은 항상 양수여야 한다.
while (N > 0) {
  //Max값을 기준으로 항상 계산이 되어야 한다.
  if (N % max === 0 && N >= max) {
    //여기서 N % max가 너머지가 0이 되는 결과 값이 실수로 계산이 되어서 0이 되는 과정의 결과여도 답을 도출하는 것엔 무관하다.
    result++;
    N -= max; //상근이가 옮긴 kg값은 제외되어야 한다.
  } else if (N % min >= 0 && N >= min) {
    //여기서 N % min >= 0은 필히 첫번째 비교문이 N % max === 0 && N >= max여야 한다. 이유는 N >= max가 &&로 N의 값이 max 값보다 커야 한다. 즉, N % max의 나머지 연산이 0으로 나오지 않는 값들은 작은 값으로 깍아서 max값 5에 가깝게 만드는 것이다. 결론적으로 첫 번째 max의 나머지 값을 구하는 조건문은 엄격해야하며 두 번째 if문에서는 보다 느슨한 조건문으로 max값에 가깝게 만들어야 하는 것이다.
    //PR 번호 35는 지금 방식의 비해 복잡한 조건문과 조건식, result값에 불필요하게 계산되는 메모리 누수가 심하기 때문에 오답이 였던 것이다.
    result++;
    N -= min;
  } else {
    result = -1;
    console.log(result);
    return -1;
  }
}
console.log(result);
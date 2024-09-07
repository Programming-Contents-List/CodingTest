let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\r\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

// 왜 맵으로 문제를 풀 수 없는가
// 첫 번째 입력값을 추출하고 나머지를 2차원 배열로 변환
const N = +input.shift();
const map = input.map(row => row.split(' ').map(Number));

const dfs = () => {
  const isVisited = Array.from({ length: N }, () => Array(N).fill(false));  // 방문 기록 배열
  const stack = [[0, 0]];
  let answer = false;

  while (stack.length > 0) {
    const [y, x] = stack.pop();
    const val = map[y][x];

    if (val === -1) { // 종료 조건
      answer = true;
      break;
    }

    // y축 방향으로 이동
    if (y + val < N && !isVisited[y + val][x]) {
      stack.push([y + val, x]);
      isVisited[y + val][x] = true;
    }

    // x축 방향으로 이동
    if (x + val < N && !isVisited[y][x + val]) {
      stack.push([y, x + val]);
      isVisited[y][x + val] = true;
    }
  }

  // 결과 출력
  console.log(answer ? 'HaruHaru' : 'Hing');
};

dfs();
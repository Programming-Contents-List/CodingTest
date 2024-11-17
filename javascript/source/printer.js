let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출
const board = input.map((el) => el.split(" ").map(Number)); // 숫자판 생성
const uniqueNumbers = new Set(); // 중복 제거를 위한 Set
const directions = [
  [-1, 0], // 위
  [1, 0],  // 아래
  [0, -1], // 왼쪽
  [0, 1],  // 오른쪽
];

// DFS 함수 정의
function dfs(x, y, numStr) {
  // 숫자 길이가 6이 되면 Set에 추가하고 종료
  if (numStr.length === 6) {
    uniqueNumbers.add(numStr);
    return;
  }

  // 4방향 탐색
  for (let [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    // 경계 조건 체크 (5x5 범위 내)
    if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
      dfs(nx, ny, numStr + board[nx][ny]);
    }
  }
}

// 숫자판의 모든 위치에서 DFS 시작
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    dfs(i, j, String(board[i][j]));
  }
}

// 결과 출력
console.log(uniqueNumbers.size);
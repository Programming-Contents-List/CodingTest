let path = require("path");
let inputPath = path.join(__dirname, "/dev/stdin"); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require("fs")
  .readFileSync(inputPath)
  .toString()
  .trim()
  .split("\r\n");
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

console.log(input);
let limit = Number(input.shift());
let array = input.map((el) => el.split(" ").map(Number));

// 방문 여부 가능 크기 - array 크기와 동일하게 생성
let n = array.length; // 행 개수
let m = array[0].length; // 열 개수
// 방문 여부 기록
let stack = [[0, 0]]; // 시작 지점 (0, 0)
let visited = Array.from({ length: n }, () => Array(n).fill(false));
visited[0][0] = true;

console.log(visited);

//도착 여부 플래그
let flag = false;

// 젤리 방향 설정
let dir = [
  [0, 1],
  [1, 0],
];

// DFS
while (stack.length > 0) {
  const [recentX, recentY] = stack.pop();
  // 젤리가 grid에서 얻게되는 현재 위치
  let getPosition = array[recentX][recentY];

  // 행과 열의 도착 지점이 -1이면 종료
  if (recentX === n - 1 && recentY === m - 1) {
    flag = true;
    break;
  }

  // 방향에 따라 이동
  for (let i = 0; i < dir.length; i++) {
    const [aliasX, aliasY] = dir[i]; // 구조할당으로 dir의 배열값을 nextX와 nextY로 선언
    const nextX = recentX + aliasX * getPosition; // 다음 x 좌표 구하기
    // 다음 좌표 이동 값을 구하기 위해 젤리가 움직일 수 있는 방향 값에 젤리가 현재 있는 grid 자리의 이동 가능 수를 0,1로 설정된 값을 곱한 후 현재 위치의 행 좌표에 더한다.
    const nextY = recentY + aliasY * getPosition; // 다음 y 좌표 구하기
    // 다음 좌표 이동 값을 구하기 위해 젤리가 움직일 수 있는 방향 값에 젤리가 현재 있는 grid 자리의 이동 가능 수를 0,1로 설정된 값을 곱한 후 현재 위치의 열 좌표에 더한다.

    // nextX, nextY가 배열 범위 내에 있는지 확인하고 방문 여부를 처리
    // 이를 검사하는 이유는 젤리가 grid에서 얻은 이동 가능 다음 위치 결과 값이 n과 m의 범위를 넘어갈 수 있기 때문이다.
    if (
      nextX >= 0 &&
      nextX < n &&
      nextY >= 0 &&
      nextY < m &&
      !visited[nextX][nextY] // visited에 이동 했던 방문 위치 여부 확인
    ) {
      stack.push([nextX, nextY]); // 새로운 위치를 스택에 추가
      visited[nextX][nextY] = true; // 방문 처리
    }
  }
}

console.log(flag ? "HaruHaru" : "Hing");

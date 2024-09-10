let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\r\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

// 왜 맵으로 문제를 풀 수 없는가
// 첫 번째 입력값을 추출하고 나머지를 2차원 배열로 변환
const N = +input.shift(); //3
const arr = input.map(el => el.split(' ').map(el => +el)); //.map(Number)

console.log(arr);

const dfs = () => {
  //2차원 배열 생성하는 구문
  //Array.from -> Array.from(arrayLike, mapFn)
  const isVisited = Array.from({ length: N }, () => Array(N).fill(false));  // 방문 기록 배열
  //new array 방식으로는 불가한가?
  const currentPos = [[0, 0]]; //DFS를 탐색을 시작할 좌표를 담는 초기 스택
  //왜 currentPos은 2차원 배열이여야 하는가?
  let answer = false;

  //왜 [x,y]가 아닌 y,x인가?
  /**
   * const [y, x] = currentPos.pop()에서 y와 x는 순서대로 y축(세로)과 x축(가로)의 좌표를 의미합니다. 좌표를 다룰 때 보통 (y, x) 형태로 사용합니다. 이 구조는 2차원 배열에서 먼저 행(row)인 y가 나오고, 그다음에 열(column)인 x가 나오는 방식이다.
   */
  while (currentPos.length > 0) {
    const [y, x] = currentPos.pop(); //currentPos의 마지막 요소 pop -> 구조 분해 할당으로 pop이 반환한 값을 받는다.
    console.log(`현재 위치: [${y}, ${x}]`);
    const currentMov = arr[y][x];  //해당 x,y위치 값
    //currentMov 가 움직이는 칸의 갯수
    //단, y,x 의 위 이동 기준은 
    console.log(`현재 값: ${currentMov}`);

    if (currentMov === -1) { // 종료 조건
      console.log('목표에 도착');
      answer = true;
      break;
    }

    // y축 방향으로 이동
    if (y + currentMov < N && !isVisited[y + currentMov][x]) {
      //isVisited[y + currentMov][x] 부분이 true인지 false인지 확인하는 조건문이다.
      currentPos.push([y + currentMov, x]);
      isVisited[y + currentMov][x] = true;
      console.log(`y축 이동: [${y + currentMov}, ${x}]`);
    }

    // x축 방향으로 이동
    if (x + currentMov < N && !isVisited[y][x + currentMov]) {
      currentPos.push([y, x + currentMov]);
      isVisited[y][x + currentMov] = true;
      console.log(`x축 이동: [${y}, ${x + currentMov}]`);
    }
    console.log('스택 상태:', currentPos);
    console.log('방문 기록:', isVisited);
  }

  // 결과 출력
  console.log(answer ? 'HaruHaru' : 'Hing');
};

dfs();
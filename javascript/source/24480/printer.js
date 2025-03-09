let path = require("path");
let inputPath = path.join(__dirname, "../dev/stdin"); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require("fs").readFileSync(inputPath).toString().trim().split("\n");
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출
// 정점 수 N, 간선 수 M, 시작 정점 R
let [N, M, R] = input.shift().split(" ").map(Number);

// 그래프를 인접 리스트로 생성
let graph = Array.from({ length: N + 1 }, () => []);
input.forEach((line) => {
  let [u, v] = line.split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u); // 양방향 그래프이므로 반대 방향도 추가
});

// **내림차순**으로 방문하기 위해 정렬
for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => b - a);
}
console.log(graph);
// 방문 배열 & 방문 순서 저장 배열
let visited = new Array(N + 1).fill(false);
let order = new Array(N + 1).fill(0);
let count = 1;

// **DFS 탐색을 재귀 방식으로 구현**
const dfs = (node) => {
  visited[node] = true;
  order[node] = count++; // 방문 순서 기록

  for (let i = 0; i < graph[node].length; i++) {
    let nextNode = graph[node][i];
    if (!visited[nextNode]) {
      dfs(nextNode);
    }
  }
};

// DFS 시작
dfs(R);

// 문제 요구사항에 맞게 출력
console.log(order.slice(1).join("\n"));

let path = require("path");
let inputPath = path.join(__dirname, "../dev/stdin"); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require("fs").readFileSync(inputPath).toString().trim().split("\n");

// KeyPoint : result 배열은 방문 순서를 저장하는 것이 아니라, 각 노드의 방문 순서를 인덱스로 접근할 수 있어야 함.
let [N, M, R] = input.shift().split(" ").map(Number);
console.log(N, M, R);
console.log(input);
// 단순하게 그래프를 나열하는 것이 아니라 그래프를 인접리스트로 생성해야한다.
// let graph = input.map((el) => el.split(" ").map(Number));
let graph = Array.from({ length: N + 1 }, () => []);
input.forEach((el) => {
  let [u, v] = el.split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u); // 양방향 그래프이기 때문에 필요하다.
});
console.log(graph);

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => b - a);
}

console.log(graph);

let visited = new Array(N + 1).fill(false);
console.log(visited);
//새로운 배열을 추가한다. order는 방문 순서를 정하는 배열이다.
let order = new Array(N + 1).fill(0);
// 새로운 변수를 추가한다. count는 방문순서를 카운트 한다.
let count = 1;

visited[R] = true;
let stack = [R];
order[R] = count++;

while (stack.length > 0) {
  let currentNode = stack.pop();
  //   console.log(currentNode);

  for (let i = 0; i < graph[currentNode].length; i++) {
    let nextNode = graph[currentNode][i];
    // console.log(nextNode);
    if (!visited[nextNode]) {
      visited[nextNode] = true;
      order[nextNode] = count++;
      stack.unshift(nextNode);
    }
  }
}
console.log(order.slice(1).join("\n"));

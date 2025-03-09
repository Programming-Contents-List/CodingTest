let path = require("path");
let inputPath = path.join(__dirname, "../dev/stdin"); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require("fs").readFileSync(inputPath).toString().trim().split("\n");

let [N, M, R] = input.shift().split(" ").map(Number);
console.log(N, M, R);

let graph = input.map((el) => el.split(" ").map(Number));
console.log(graph.length);

let visited = new Array(N + 1).fill(false);
visited[R] = true;
console.log(visited);

let stack = [R];
let Result = [R];

while (stack.length > 0) {
  let currentNode = stack.pop();
  Result.push(currentNode);
  //   console.log(currentNode);

  for (let i = 0; i < graph[currentNode].length; i++) {
    let nextNode = graph[currentNode][i];
    // console.log(nextNode);
    if (!visited[nextNode]) {
      visited[nextNode] = true;
      stack.push(nextNode);
    }
  }
  console.log(Result);
}

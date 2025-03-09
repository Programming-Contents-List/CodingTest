/**
 * Q.
 * 어떤 마을에 N개의 집(1번부터 N번까지 번호가 있음) 이 있다.
 * 당신은 특정한 순서대로 집을 방문할 것이다.
 * 각 집을 방문할 때 방문한 순서를 기록하는 배열을 만들어라.
 * 방문하지 않은 집은 0으로 표시해야 한다.
 */

let input = `5
3 1 4`.split("\n");
let N = Number(input.shift());
let graph = input.map((el) => el.split(" ").map(Number));
let init = graph[0][0];
console.log(graph);

let visited = new Array(N + 1).fill(false);
let result = new Array(N + 1).fill(0);
let stack = [[init]];
let count = 0;
console.log(stack);

while (stack.length > 0) {
  const current = stack.pop();
  //   console.log(stack[].length);
  for (let nextNode of stack[count]) {
    console.log(nextNode);
    // const nextNode = graph[current][i];
    // console.log("graph", nextNode);
  }
  //   if (!visited === current) {
  //     visited[current] = true;
  //     result[current].push();
  //   }
}
// console.log(result);

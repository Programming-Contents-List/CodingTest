/**
 * Q.
 * 어떤 마을에 N개의 집(1번부터 N번까지 번호가 있음) 이 있다.
 * 당신은 특정한 순서대로 집을 방문할 것이다.
 * 각 집을 방문할 때 방문한 순서를 기록하는 배열을 만들어라.
 * 방문하지 않은 집은 0으로 표시해야 한다.
 *
 * 입력 예제
 * 5
 * 3 1 4
 *
 * 출력 예제
 * 2 0 1 3 0
 *
 * 입력 예제
 * 7
 * 5 3 7 1
 *
 * 출력 예제
 * 4 0 2 0 1 0 3
 */

let input = `5
3 1 4`.split("\n");
let N = Number(input.shift());
//불필요한 중첩 배열
// let graph = input.map((el) => el.split(" ").map(Number));
let graph = input[0].split(" ").map(Number);
console.log(graph);

let result = new Array(N + 1).fill(0);
let count = 1;

for (let i = 0; i < graph.length; i++) {
  const visited = graph[i];
  result[visited] = count++;
}

console.log(result.slice(1).join(" "));

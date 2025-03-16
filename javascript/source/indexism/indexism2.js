/**
 * Q.
 * 어떤 학교에서는 매일 N명의 학생이 출석 체크를 한다.
 * 출석한 학생의 번호가 주어질 때, 각 학생이 출석했는지 여부를 배열로 출력하라.
 * 출석한 학생은 1, 출석하지 않은 학생은 0으로 표시한다.
 *
 * 입력 예제
 * 5
 * 3 1 4
 *
 * 출력 예제
 * 1 0 1 1 0
 *
 * 입력 예제
 * 7
 * 2 5 7
 *
 * 출력 예제
 * 0 1 0 0 1 0 1
 */

const input = `5
3 1 4`.split("\n");

const N = Number(input.shift());
// console.log(input);
const array = input[0].split(" ").map(Number);

// console.log(N);
// console.log(array);

const graph = Array.from({ length: N }).fill(0);

// console.log(graph);

for (let viseted of array) {
  graph[viseted - 1] = 1;
  //   console.log(viseted - 1);
  //   console.log(graph);
}

console.log(graph.join(" "));

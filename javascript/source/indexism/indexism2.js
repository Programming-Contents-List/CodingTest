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

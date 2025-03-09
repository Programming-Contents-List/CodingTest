let path = require("path");
let inputPath = path.join(__dirname, "../dev/stdin"); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require("fs").readFileSync(inputPath).toString().trim().split("\n");

const N = Number(input.shift());
// console.log(N);
const grid = input.map((el) => el.split(" ").map(Number));
// console.log(grid);
let dir = [
  [0, 1],
  [1, 0],
];
let stack = [[0, 0]];
let visited = Array.from({ length: N }, () => Array(N).fill(false));
visited[0][0] = true;
let flag = false;

while (stack.length > 0) {
  const [currentX, currentY] = stack.pop();
  if (currentX === N - 1 && currentY === N - 1) {
    flag = true;
    break;
  }
  const getPosition = grid[currentX][currentY];
  for (let i = 0; i < dir.length; i++) {
    const [aliasX, aliasY] = dir[i];
    const nextX = currentX + aliasX * getPosition;
    const nextY = currentY + aliasY * getPosition;

    if (
      nextX >= 0 &&
      nextY >= 0 &&
      nextX < N &&
      nextY < N &&
      !visited[nextX][nextY]
    ) {
      stack.push([nextX, nextY]);
      visited[nextX][nextY] = true;
    }
  }
}

console.log(flag ? "HaruHaru" : "Hing");

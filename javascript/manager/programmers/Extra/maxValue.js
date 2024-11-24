let array = [10, 20, 30, 13, 25];
let maxValue = -Infinity; // 초기값을 가장 작은 값으로 설정

for (let i = 0; i < array.length; i++) {
  if (array[i] > maxValue) {
    maxValue = array[i]; // 더 큰 값을 만나면 maxValue 갱신
  }
}

console.log(maxValue);  // 출력: 30

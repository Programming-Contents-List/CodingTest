let array = [10, 20, 30, 13, 25];
let minValue = Infinity; // 초기값을 가장 작은 값으로 설정

for (let i = 0; i < array.length; i++) {
  if (array[i] < minValue) {
    minValue = array[i]; // 더 큰 값을 만나면 minValue 갱신
  }
}

console.log(minValue);  // 출력: 10

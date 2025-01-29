let array = [10, 20, 30, 13, 25];

// reduce를 사용하여 최대값 구하기
let max = array.reduce((prev, accumulator) => {
  console.log("Comparing:", prev, accumulator);
  return Math.max(prev, accumulator); // prev와 accumulator 중 더 큰 값을 반환
});

console.log("max:", max); // 출력: max: 30
// max 값을 구하는 방식은 Math.max 함수를 활용해서 계산해야한다. reduce는 기본적으로 최소값을 반환한다는 것으로 보일 수 있다 하지만 Infinity를 함께 사용하면 유연하게 최대 값 최소 값을 구현할 수 있다.

// 최소 값
let minArray = [10, 20, 30, 13, 25];
let MIN = minArray.reduce((prev, accumulator) => (accumulator < prev ? accumulator : prev), Infinity);
console.log("min:", MIN); // 출력: 10


// 최대 값
let maxArray = [10, 20, 30, 13, 25];
let MAX = maxArray.reduce((prev, accumulator) => (accumulator > prev ? accumulator : prev), -Infinity); // 초기값을 -Infinity로 설정
console.log("max:", MAX); // 출력: max: 30


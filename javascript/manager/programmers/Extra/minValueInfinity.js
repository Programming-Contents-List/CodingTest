let standard = Infinity; // 초기 기준 값
let indexValues = [2, 4, 1]; // index + 1 값들

for (let i = 0; i < indexValues.length; i++) {
  standard = Math.min(standard, indexValues[i]); // 최소값 갱신
  console.log(standard); // 출력: 갱신된 최소값
}

//let standard = Infinity;의 동작원리는 숫자 타입의 전역 상수이며 문자열이 아닌 숫자 값이며 수학적으로 무한대를 나타낸다. 모든 숫자보다 크기 때문에 초기값으로 사용하기 적합하다.

// 따라서 Infinity는 최소 값이 될 수도 있고 최대값이 될 수도 있다.
// 최대값인 경우 : 비교 대상이 없기 때문에 std는 가장 큰 값이다.
let array = [10];
let std = Infinity;
console.log(array[0] < std);  //true

// 최소값인 경우 : 비교 대상이 있기 때문에 newStd는 가장 작은 값을 계산한다.
let newArray = [10, 20];
let newStd = Infinity;
for (let el of newArray) {
  newStd = Math.min(newStd, el);
  console.log(newStd);
  return newStd
}
// min 값을 재할당 할 경우
// let newArray = [10, 20];
// let newStd = Infinity;
// for (let el of newArray) {
//   let min = Math.min(newStd, el);
//   console.log(min);
//   return min
// }

// 물론 이를 반대로 사용할 수도 있다. -Infinity를 사용하면 max값으로 계산할 수 있다.
// infinity를 `-`으로 두고 Std에 다시 반환된 최대 값을 할당하면 된다.
let Ay = [10, 20];
let Std = -Infinity;
for (let el of Ay) {
  Std = Math.max(Std, el);
  //console.log(max);
  //return standard
}
console.log(Std);
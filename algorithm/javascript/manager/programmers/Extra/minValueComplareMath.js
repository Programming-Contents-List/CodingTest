let std = 10;
let target = 5;

let result = Math.min(std, target); // a(10)과 b(5)를 비교
console.log(result); // 출력: 5

//여기서 a는 비교 기준이고 b는 비교 대상이다.

// 배열 값일 경우 다음과 같다.
let array = [10, 20, 30, 13, 25];
let standard = 15; // 비교 기준 값

for (let target of array) {
  let result = Math.min(standard, target); // standard의 현재 배열 요소(target)를 비교
  console.log(`standard: ${standard}, target: ${target}, result: ${result}`);
}

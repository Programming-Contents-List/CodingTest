// mapFn:el에서 this를 통해 원하는 값만 반환하는 세 번째 인자

// this를 적극 적으로 활용한 예시
const obj = {
  multiplier: 2,
  multiply(value) {
    return value * this.multiplier;
  },
};

const el = [1, 2, 3, 4, 5];

// `thisArg`를 사용해 obj를 map 함수의 this로 설정
const result = Array.from(
  el,
  function (value) {
    return this.multiply(value);
  },
  obj
);

console.log(result); // [2, 4, 6, 8, 10]

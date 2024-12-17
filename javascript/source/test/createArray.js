// Array.from(arraySize, mapFn:el, thisArg);

const context = {
  addValue: 5,
};

const numbers = [10, 20, 30];

// thisArg를 사용해 context 값을 참조
const result = Array.from(
  numbers,
  function (num) {
    return num + this.addValue;
  },
  context
);

console.log(result); // [15, 25, 35]

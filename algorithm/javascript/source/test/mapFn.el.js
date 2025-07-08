// 기존 배열을 활용해서 새로운 배열을 만들어 내는 두 번째 인자.

let str = ["h", "e", "l", "l", "o"];

let upperCaseArray = Array.from(str, (char) => char.toUpperCase());
console.log(upperCaseArray); // ['H', 'E', 'L', 'L', 'O']

//중복 요소가 있는 배열 변환 : 짝수로만 변환
let el = [1, 2, 3, 4, 5];
let evens = Array.from(el, (x) => (x % 2 === 0 ? x : 0));
console.log(evens); // [0, 2, 0, 4, 0]

// map을 활용한 방식
let map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

let keys = Array.from(map.keys());
let values = Array.from(map.values());
console.log(keys); // ['a', 'b', 'c']
console.log(values); // [1, 2, 3]

// Set을 활용한 예시
let set = new Set([1, 2, 3, 4, 5]);
let array = Array.from(set);
console.log(array); // [1, 2, 3, 4, 5]

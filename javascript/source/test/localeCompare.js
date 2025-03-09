let arr = ["Apple", "Banana", "apple", "grape", "Orange"];

// 오름차순
let AscArr = arr.sort((a, b) => a.localeCompare(b)); // 오름차순
console.log(AscArr);
// ['Apple', 'Banana', 'Orange', 'apple', 'grape']

// 내림차순
let desArr = arr.sort((a, b) => b.localeCompare(a)); // 내림차순
console.log(desArr);
// ['grape', 'apple', 'Orange', 'Banana', 'Apple']

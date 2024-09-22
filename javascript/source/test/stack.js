console.log('스택 초기화 및 새로운 배열 초기화');

// 기본 배열과 스택 배열 선언
let arr = ['apple', 'banana', 'cherry', 'date', 'fig'];
let stack = [0, 2, 4]; // arr의 인덱스를 관리하는 스택
let temp = stack[stack.length - 1];
console.log('temp: ', temp);
console.log('arr: ', arr[temp]);
// stack을 이용하여 arr의 값을 출력
console.log("초기 arr:", arr);
console.log("초기 stack:", stack);

// 스택을 이용해 arr의 값에 접근
console.log("stack을 이용한 접근:");
stack.forEach(index => {
  console.log(arr[index]); // stack의 인덱스를 이용해 arr 값 출력
});

// stack을 이용해 arr의 값을 수정 (예를 들어, cherry와 fig를 각각 'grape'와 'kiwi'로 바꿈)
console.log("\nstack을 이용해 arr의 값 변경:");
arr[stack[1]] = 'grape'; // stack[1]은 2이므로 arr[2] = 'grape'
arr[stack[2]] = 'kiwi';  // stack[2]는 4이므로 arr[4] = 'kiwi'

// 변경된 arr 확인
console.log("변경된 arr:", arr);

// stack을 이용해 마지막 요소 pop하고, 그 값을 사용하여 arr 수정
console.log("\nstack을 pop하여 arr의 값을 수정:");
let lastIndex = stack.pop(); // stack의 마지막 인덱스 pop
console.log(lastIndex);
arr[lastIndex] = 'mango';    // arr[4] = 'mango'로 변경

console.log("pop 후 변경된 arr:", arr);
console.log("pop 후 stack:", stack);


// module.exports = console.log(test);

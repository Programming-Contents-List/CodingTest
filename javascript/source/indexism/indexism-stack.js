/**
 * Q.
 * 어떤 문자열을 입력받아서, 스택을 사용하여 뒤집은 후 출력하는 프로그램을 작성하시오.
 * 🚀 단, split(""), reverse(), join("") 같은 기본 제공되는 문자열 뒤집기 메서드는 사용하지 않는다!
 * 👉 반드시 스택(Stack)의 개념을 이용해서 직접 구현할 것!
 *
 * 입력 예제
 * hello
 *
 * 출력 예제
 * olleh
 *
 * 입력 예제
 * stack
 *
 * 출력 예제
 * kcats
 */

let input = `hello`;
let N = input.length;
// console.log(N);
let array = Array.from(input);
// let visited = Array.from({ length: N }, () => 0);
let visited = [];

for (let revers = N - 1; revers >= 0; revers--) {
  visited.push(array[revers]);
}

console.log(visited.join(""));

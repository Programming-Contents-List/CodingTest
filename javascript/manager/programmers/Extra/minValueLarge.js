// 데이터가 큰 경우 스프레드 연산자 (...)는 배열을 개별 숫자로 분리하므로 배열 크기가 매우 클 때 메모리 사용량이 증가할 수 있다. 이 경우 for 루프나 reduce 메서드 같은 방법을 사용할 수 있다.
//reduce는 자바스크립트의 배열 메서드로 배열을 순회하며 각 요소를 누적하여 단일 값으로 반환하는 데 사용된다.
let array = [10, 20, 30, 13, 25];
let minValue = array.reduce((min, value) => Math.min(min, value), Infinity);
console.log(minValue); // 출력: 10

// reduce를 사용하는 방법
let log = array.reduce((prev, accumulator) => { console.log(prev, accumulator) });
//reduce는 콜백 함수의 반환값을 누적값으로 사용된다.
console.log("Log:" + log);  //여기서 prev는 고정되지 않는다. 이유는 반환된 값이 없기 때문이다. 꼭 반환된 값이 있어야 reduce는 정상적으로 동작한다.
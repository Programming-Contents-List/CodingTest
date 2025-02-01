let array = [10, 20, 30, 13, 25];

// reduce를 사용하는 방법
let min = array.reduce((prev, accumulator) => {
  console.log(prev, accumulator);
  return prev;
});
//reduce는 콜백 함수의 반환값을 누적값으로 사용된다.
console.log("min:" + min);  //여기서 prev는 고정되지 않는다. 이유는 반환된 값이 없기 때문이다. 꼭 반환된 값이 있어야 reduce는 정상적으로 동작한다.
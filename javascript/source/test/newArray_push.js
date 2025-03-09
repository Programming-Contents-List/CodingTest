let arr = new Array(5).fill().map(() => []); // 길이가 5인 배열을 빈 배열로 초기화
// = `let arr = new Array(5).fill([]);` 위와 같은 방식
console.log(arr); // [[], [], [], [], []]

arr[3].push(5); //[ [], [], [], [ 5 ], [] ]
// arr[3]은 빈 배열이므로 여기서 push가 가능 -> `arr[3] = 5;`를 사용하게 되면 2차원 배열을 유지하지 않고 값을 변경한다.

console.log(arr); // [[], [], [], [5], []]

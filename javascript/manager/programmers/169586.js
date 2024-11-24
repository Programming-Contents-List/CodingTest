let keymap = ["ABACD", "BCEFD"];
let targets = ["ABCD", "AABB"];

function solution(keymap, targets) {
  var answer = [];
  // let count = 0;   //count의 위치가 중요. 왜냐면 초기화 때문에
  for (let i = 0; i < targets.length; i++) {
    let count = 0; // 각 target에 대해 초기화. index 1일 때 와 2일 때를 구별하기 위해 초기화를 해야한다.
    for (let j = 0; j < targets[i].length; j++) {
      let minPress = Infinity; // 최소 누르기 횟수 저장
      // 여기까지 target의 모든 요소들을 나누었다 이제 keymap의 루프를 돌면서 해당 값을 비교 대조 해야한다.
      for (let k = 0; k < keymap.length; k++) {
        let index = keymap[k].indexOf(targets[i][j]);
        //-1인 공백이 아니라면
        if (index !== -1) {
          minPress = Math.min(minPress, index + 1); // 1-based index
        }
      }
      // 해당 조건문은 왜 있는건가?
      if (minPress === Infinity) {
        count = -1; // 키를 찾을 수 없는 경우
        break;
      } else {
        count += minPress;
      }
    }
    answer.push(count);
  }
  return answer;
}

console.log(solution(keymap, targets));
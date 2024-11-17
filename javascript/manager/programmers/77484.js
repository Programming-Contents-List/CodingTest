function solution(lottos, win_nums) {
  var answer = [];
  var N = 6;
  var cnt = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (lottos[i] === j) {
        cnt++;
        answer.push(cnt);
        console.log("ifcnt" + cnt);
      }
    }
    if (lottos[i] === win_nums[i]) {
      cnt++;
      answer.push(cnt);
      console.log("cnt" + cnt);
    } else {

    }
  }
  answer.push(cnt);
  if (cnt === 0 || cnt === 1) {
    console.log("6등");
  } else if (cnt === 2) {
    console.log("5등");
  } else if (cnt === 3) {
    console.log("4등");
  } else if (cnt === 4) {
    console.log("3등");
  } else if (cnt === 5) {
    console.log("2등");
  } else if (cnt === 6) {
    console.log("1등");
  }
  return answer;
}
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]))
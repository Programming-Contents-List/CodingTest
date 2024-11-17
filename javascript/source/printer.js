let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin.txt'); // 로컬 테스트용 경로
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  // 백준 제출용 경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');

input.shift(); // 첫 번째 줄 제거

let deck = []; // 덱 배열 초기화

// 함수로 명령어 처리
function Deck(command, value) {
  if (command === 'push_back') {
    deck.push(value);
  } else if (command === 'push_front') {
    deck.unshift(value);
  } else if (command === 'pop_back') {
    console.log(deck.length > 0 ? deck.pop() : -1);
  } else if (command === 'pop_front') {
    console.log(deck.length > 0 ? deck.shift() : -1);
  } else if (command === 'size') {
    console.log(deck.length);
  } else if (command === 'empty') {
    console.log(deck.length === 0 ? 1 : 0);
  } else if (command === 'front') {
    console.log(deck.length > 0 ? deck[0] : -1);
  } else if (command === 'back') {
    console.log(deck.length > 0 ? deck[deck.length - 1] : -1);
  }
}

// 명령어 반복 처리
for (let el of input) {
  let [command, value] = el.split(' '); // 명령어와 값을 분리
  value = Number(value); // 숫자 값 변환 또는 null 처리
  Deck(command, value); // 명령어 처리 함수 호출
}

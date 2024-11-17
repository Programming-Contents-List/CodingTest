let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin.txt'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출
input.shift();

let deck = [];
for (let el of input) {
  let [command, value] = el.split(' '); // 명령어와 값을 분리
  value = Number(value); // 값은 숫자로 변환
  // console.log(el);
  if (command === 'push_back') {
    let value = el.split(' ')[1];
    // console.log(value);
    deck.push(value);
  } else if (command === 'push_front') {
    let value = el.split(' ')[1];
    // console.log(value);
    deck.unshift(value);
  } else if (command === 'pop_back') {
    // console.log(value);
    if (deck.length > 0) {
      console.log(deck.pop());
    } else {
      console.log(-1);
    }
  } else if (command === 'pop_front') {
    if (deck.length > 0) {
      console.log(deck.shift());
    } else {
      console.log(-1);
    }
  } else if (command === 'size') {
    console.log(deck.length);
  } else if (command === 'empty') {
    if (deck.length === 0) {
      console.log(1);
    } else {
      console.log(0);
    }
  } else if (command === 'front') {
    if (deck.length > 0) {
      console.log(deck[0]);
    } else {
      console.log(-1);
    }
  } else if (command === 'back') {
    if (deck.length > 0) {
      console.log(deck[deck.length - 1]);
    } else {
      console.log(-1);
    }
  }
}
// console.log(deck);
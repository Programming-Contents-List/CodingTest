let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin.txt'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출
input.shift();

let deck = [];
for (let el of input) {
  // console.log(el);
  if (el.includes('push_back')) {
    let value = el.split(' ')[1];
    // console.log(value);
    deck.push(value);
  } else if (el.includes('push_front')) {
    let value = el.split(' ')[1];
    // console.log(value);
    deck.unshift(value);
  } else if (el.includes('pop_back')) {
    // console.log(value);
    if (deck.length > 0) {
      console.log(deck.pop());
    } else {
      console.log(-1);
    }
  } else if (el.includes('pop_front')) {
    if (deck.length > 0) {
      console.log(deck.shift());
    } else {
      console.log(-1);
    }
  } else if (el.includes('size')) {
    console.log(deck.length);
  } else if (el.includes('empty')) {
    if (deck.length === 0) {
      console.log(1);
    } else {
      console.log(0);
    }
  } else if (el.includes('front')) {
    if (deck.length > 0) {
      console.log(deck[0]);
    } else {
      console.log(-1);
    }
  } else if (el.includes('back')) {
    if (deck.length > 0) {
      console.log(deck[deck.length - 1]);
    } else {
      console.log(-1);
    }
  }
}
// console.log(deck);
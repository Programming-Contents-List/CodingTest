const obj = {
  name: "Alice",
  normalFunc: function () {
    console.log("일반 함수:", this.name);
  },
  arrowFunc: () => {
    console.log("화살표 함수:", this.name);
  },
};

obj.normalFunc(); // 출력: "일반 함수: Alice"
obj.arrowFunc(); // 출력: "화살표 함수: undefined"

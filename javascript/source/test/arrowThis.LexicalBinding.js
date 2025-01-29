const obj = {
  name: "Alice",
  arrowFunc: () => {
    const innerObj = {
      name: "Tom",
    };
    console.log(innerObj.name); // 'Tom'
  },
};

obj.arrowFunc();

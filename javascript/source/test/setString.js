let input = ["apple", "banana", "apple", "orange", "banana"];
input = [...new Set(input)];
console.log(input); // ['apple', 'banana', 'orange']

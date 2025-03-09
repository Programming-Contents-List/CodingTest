const people = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 18 },
];

const adults = people.filter((person) => person.age >= 18);

console.log(adults);
// [
//   { name: 'Bob', age: 20 },
//   { name: 'Charlie', age: 18 }
// ]

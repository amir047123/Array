// Array Method

//push ()

// let numbers = [1, 2, 3, 4, 5];

// // numbers.push(6);

// numbers.push(6, 7, 8, 9);

// console.log(numbers);

// let numbers = [1, 2, 3, 4, 5];

// numbers.pop();

// console.log(numbers);

//shift

// let numbers = [1, 2, 3, 4, 5];
// numbers.shift();

// console.log(numbers);

//unshift

// let numbers = [1, 2, 3, 4, 5];

// numbers.unshift(0);

// console.log(numbers);

//concat

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr3 = arr1.concat(arr2);

// console.log(arr3);

//join

// let fruits = ["apple", "banana", "orange"];

// console.log(fruits.join(","));

//slice

// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers.slice(1, 4));

//splice

// let numbers = [1, 2, 3, 4, 5];

// numbers.splice(2, 1);

// console.log(numbers);

//FORECH

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (number) {
//   console.log(number);
// });

//map

// let number = [1, 2, 3, 4, 5];

// let double = number.map(function (item) {
//   return item * 2;
// });

// console.log(double);

//filter

// let number = [1, 2, 3, 4, 5];

// let even = number.filter(function (item) {
//   return item % 2 === 0;
// });

// console.log(even);

// reduce

// let number = [1, 2, 3, 4];

// let sum = number.reduce(function (acc, item) {
//   return acc + item; 0+1=1, 1+2=3, 3+3=6, 6+4=10
// }, 0);

// console.log(sum);

// javascript  Array Seacrh

//indexOf

// let fruits = ["apple", "banana", "orange"];

// console.log(fruits.indexOf("banana"));
// console.log(fruits.indexOf("apple"));

// //lastIndexOf

// let numbers = [1, 2, 3, 2, 4, 2];

// console.log(numbers.lastIndexOf(4));

//include

// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers.includes(7));

// find

// let numbers = [1, 2, 3, 4, 5];

// let found = numbers.find(function (item) {
//   return item === 5;
// });

// console.log(found);

//findIndex

// let numbers = [5, 12, 8, 130, 44];

// let index = numbers.findIndex(function (item) {
//   return item > 10;
// });

// console.log(index);

/// some

// let number = [1, 2, 3, 4, 5];

// let hasEven = number.some(function (item) {
//   return item % 2 === 0;
// });

// console.log(hasEven);

// let numbers = [2, 4, 6, 8];

// let allEven = numbers.every(function (item) {
//   return item % 2 === 0;
// });

// console.log(allEven);

// js sorting

// let fruits = ["banana", "apple", "orange"];

// fruits.sort();

// console.log(fruits);

// let numbers = [1, 2, 3, 4, 5];

// numbers.sort(function (a, b) {
//   return b - a;
// });

// console.log(numbers);

// let fruits = ["banana", "apple", "orange"];

// fruits.reverse();

// console.log(fruits);

// let mixed = [100, "banana", 25, "apple", 5, "orange"];

// mixed.sort();

// console.log(mixed);

// let students = [
//   { name: "John", age: 25, grade: "A" },
//   { name: "Jane", age: 21, grade: "B" },
//   { name: "Jim", age: 20, grade: "C" },
// ];

// students.sort(function (a, b) {
//   return a.age - b.age; //accending by age
// });

// console.log(students);

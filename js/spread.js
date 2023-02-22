const max = Math.max(12, 15, 65);
// console.log(max);

const numbers = [12, 15, 65, 22];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(999);
// console.log(numbers);
// console.log(numbers2);

const numbers3 = [...numbers];
const numbers4 = [444,...numbers,999];
console.log(numbers4);
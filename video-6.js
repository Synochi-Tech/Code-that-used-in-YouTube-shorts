const add = (a = 1, b = 2) => a + b;

console.log(add());
// 1 + 2 result in 3 
console.log(add(5));
// 5 + 2 result in 7 
console.log(add(undefined, 10));
// 1 + 10 result in 11

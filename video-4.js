let a = {};
let b = { key: "b" };
let c = { key: "c" };
console.log("Line No 5");
console.log(a);

a[b] = 123;
console.log("Line No 9");
console.log(a);

a[c] = 456;
console.log("Line No 12");
console.log(a);

console.log(a[b]);
console.log("Line No 16");
console.log(a);



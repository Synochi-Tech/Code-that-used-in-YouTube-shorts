const array = [1, 2, 3, 4, 5];

const sum = array.reduce((acc, curr) => {
  console.log({ acc, curr });
  return acc + curr;
},0);

console.log(sum);

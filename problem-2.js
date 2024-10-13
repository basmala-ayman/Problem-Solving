let arr = [10, 20, 30, 50, 40, 90, 70];
let max = arr.reduce((ele, value) => ele > value ? ele : value);

console.log(max);
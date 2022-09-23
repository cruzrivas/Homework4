const values = [3, 11, 7, 2, 9, 10];

let sum = 0;
values.forEach(value => {
  sum += value;
});
console.log("The sum of all values is ",sum);

let max = values[0];
for (let i = 1; i < values.length; i++) {
  if (values[i] > max) {
    max = values[i];
  }
}
console.log("The max of all values is ",max);

let min = values[0];
for (let i = 1; i < values.length; i++) {
  if (values[i] < min) {
    min = values[i];
  }
}
console.log("The min of all values is ",min);
// Exercise 1
function answer(x,oper,y) {
var x = prompt("Enter first number")
var oper = prompt("Enter mathematical operation you want to use")
var y = prompt("Enter second number")
x = parseFloat(x);
y = parseFloat(y);
if (oper === "/") {
    return `${x} / ${y} = ${x / y}`;
} else if (oper === "*") {
    return `${x} * ${y} = ${x * y}`;
} else if (oper === "-") {
    return `${x} - ${y} = ${x - y}`;
} else if (oper === "+") {
    return `${x} + ${y} = ${x + y}`;
}
}
console.log(answer());
// Exercise 3
const r = Number(prompt("Enter the circle radius:"));
var circle = {
    circumference : 2 * Math.PI * r,
    area : Math.PI * (r*r),
}; 
console.log(`Its circumference is ${circle.circumference}`);
console.log(`Its area is ${circle.area}`);
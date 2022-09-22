// Exercise 2
function conversion(f,c) {
    var f = prompt("Please enter the Fahrenheit temperature you would like to convert to Celsius!");
    const m = 32;
    const d = 5/9;
    c = (f - m) * d;
    f = parseFloat(f);
    if (f === 32){
    return `${f} degrees Fahrenheit = ${c} degrees Celsius`;
    } else if (f === 212) {
     return `Water boiling temperature is ${f} Fahrenheit or ${c} Celsius`;
    } else {
    return `Temperature of ${f} Fahrenheit is equivalent to ${c} degrees Celsius`;
    }
}
console.log(conversion());

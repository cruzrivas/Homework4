const words = [];

let word = "";
const lowercaseWord = word.toLowerCase();
while (word.toLowerCase() !== "stop") {
  word = prompt("Enter a word or stop to quit:");
  if (word.toLowerCase() !== "stop") {
    words.push(word);
}
}
if (words.length != 0) {
console.log("You have entered the following words:");
words.forEach(w => {
  console.log(w);
})}
else {
    console.log("No words to display, Stop was the first word entered.")
}
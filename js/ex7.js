function getRandomInt(max) {
    return Math.floor(Math.random() * 100 + 1);
}
      let totalGuess = 1;
        let userEnteredValue = prompt("Guess the number")
        if (userEnteredValue === getRandomInt) {
          console.log(
            " Correct! It took you " +
              totalGuess +
              " attempts to guess the correct number. "
          );
        } else if (userEnteredValue > getRandomInt) {
             totalGuess++; 
          console.log("Too high,guess again");
        } else if (userEnteredValue <= 0) {
          console.log("Enter the number between 1 and 100");
        } else {
          totalGuess++;
          console.log("Too low,guess again");
        };
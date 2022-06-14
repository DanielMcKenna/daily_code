//ship location
let location1 = 3;
let location2 = 4;
let location3 = 5;
// actual guess, how many guesses have been made and hits
let guess;
let guesses = 0;
let hits = 0;
// track if the ship has been sunk or not
let isSunk = false;

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (enter a number from 0-6)");
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses = guesses + 1;

    if (guess == location1 || guess == location2 || guess == location3) {
      alert("Hit!");
      hits = hits + 1;

      if (hits == 3) {
        isSunk = true;
        alert("you sank my battleship!");
      }
    } else {
      alert("MISS");
    }
  }
}

let stats = `You took ${guesses} guesses to sink the battleship, which means your shooting accuracy was ${
  3 / guesses
}`;

alert(stats);

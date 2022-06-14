function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//locations
let location1 = randomIntFromInterval(0, 6);
let location2;
let location3;

let guess;
let guesses = 0;
let hits = 0;

let isSunk = false;

if (location1 > 4) {
  location2 = location1 - 1;
  location3 = location2 - 1;
} else {
  location2 = location1 + 1;
  location3 = location2 + 1;
}

console.log(location1);
console.log(location2);
console.log(location3);

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (enter a number from 0-6");

  if (guess < 0 || guess > 6) {
    alert("incorrect input try again.");
  } else {
    guesses = guesses + 1;

    if (guess == location1 || guess == location2 || guess == location3) {
      alert("HITTT!!!");
      hits = hits + 1;

      if (hits == 3) {
        isSunk = true;
        alert("you sunk my ship!! you win");
      }
    } else {
      alert("Miss!");
    }
  }
}

let stats = `You took ${guesses} guesses to sink the battleship, which means your shooting accuracy was ${
  3 / guesses
}`;

alert(stats);

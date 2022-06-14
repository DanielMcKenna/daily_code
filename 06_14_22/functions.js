//going to write a small barking function.

function bark(name, weight) {
  if (weight > 20) {
    console.log(`${name}, says big WOOF WOOF`);
  } else {
    console.log(`${name}, says little woof woof`);
  }
}

bark("bigDog", 23);
bark("spot", 13);
bark("clifford the very small dog", 1);
bark("lady", 65);

//function on what to wear

function whatShouldIWear(temp) {
  if (temp < 60) {
    console.log("Jacket");
  } else if (temp < 70) {
    console.log("sweater");
  } else {
    console.log("t-shirt");
  }
}

whatShouldIWear(59);
whatShouldIWear(69);
whatShouldIWear(80);

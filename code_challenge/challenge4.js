// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:
let hayStack = [undefined, "test", "needle", "run"];
let findNeedle = (hayStack) => {
  let count = 0;
  for (let i = 0; i < hayStack.length; i++) {
    if (hayStack[i] == undefined) {
      count++;
      continue;
    } else if (hayStack[i].includes("needle")) {
      return `found the needle at position ${count}`;
    }
    count++;
  }
};

function findNeedle1(haystack) {
  // your code here
  return `found the needle at position ${haystack.indexOf("needle")}`;
}

console.log(findNeedle1(hayStack));

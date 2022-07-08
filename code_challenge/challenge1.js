// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// Code Challenge one - I need to complete the coding problem above.

// spread syntax
let word = "batmna";
function solution(str) {
  str = [...str].reverse().join("");
  return str;
}

console.log(solution(word));

//break down of whats going on

let word2 = "guitar";
console.log("The original string is: " + word2);
let splitStr = word2.split(""); // ["g","u","i","t","a","r"] split creats an array of the letters
let reversedArr = splitStr.reverse(); // ["r", "a", "t"...] reverses the array
let reversedStr = reversedArr.join(""); // joines each index
console.log("The reversed string is: " + reversedStr); // spits the info back out

// here is a for loop example

function solution2(s) {
  var o = "";
  for (var i = s.length - 1; i >= 0; i--) o += s[i];
  return o;
}

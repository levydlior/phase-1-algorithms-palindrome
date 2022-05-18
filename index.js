function isPalindrome(word) {
const reversedWord = word.split('').reverse().join('') 
if( word === reversedWord){
  return true
} else {
  return false}
}

//problem: get a string and check if it is the same from both sides (start to end an the other way)
//test: is(isPalindrome(lol) will be true)
//test: is(isPalindrome(hello) will be false)
/* 
Add your pseudocode here
split the word into a new array
reverse the order of the letters of the array
join the array into a new variable
check if the reversed word equal to the given word if so return true if not return false
*/ 

/*
  Add written explanation of your solution here

  We take the word and we split it into an array of individual letters. We then reverse it and rejoin it into a single word. We then
  check to see if the new reversed word is equal to the given word and if so return true or false according to the requirments 
  */

// You can run `node index.js` to view these console logs
if (require.main === module) {

  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

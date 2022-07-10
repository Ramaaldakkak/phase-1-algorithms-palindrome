function isPalindrome(word) {
  // Write your algorithm here
  const wordArray = word.split('')
  const reversedWordArray = wordArray.reverse()
  const reversedWord = reversedWordArray.join('')

  if (word === reversedWord) {
    return true
  } else  {
    return false
  }
}

/* 
  Add your pseudocode here

  Check on each letter of the word, we can do this by iterating through the word after putting it in an array, and checking if the letter is the same as the letter on the other side.

  1. Create an array and put the word in it.
  2. Reverse the array.
  3. Join the array.
  4. Check if the word is the same as the reversed word.
  

*/

/*
  Add written explanation of your solution here

  // If the word is readable backwards the same as forwards
  // return true
  // else 
  // return false

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
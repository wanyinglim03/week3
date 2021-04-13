// Usage: getRandomInt(6)
// Outputs a random number between 1 and 6
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: Play a simple game of craps
// - Begin with the recipe (algorithm) and code from the first practice
// - Implement the (basic) rules of craps:


let die1 = getRandomInt(6)
console.log(`The first die is ${die1}`)

let die2 = getRandomInt(6)
console.log(`The first die is ${die2}`)

let total = die1 + die2
console.log(`The total is ${total}`)
if (total == 7 || total == 11) {
  //   - If the total of the two dice is 7 or 11, the player wins
  console.log(`YOU WIN!`)
} else if (total == 2 || total == 3 || total == 12) {
  //   - If the total of the two dice is 2, 3, or 12, the player loses
  console.log(`YOU LOSE!`)
}else {
  //   - If the total is anything else, the "point" is set, e.g. "the point is 6"
  console.log(`the point is ${total}`)
}



// Write the recipe (algorithm) in the comments. Write the code.

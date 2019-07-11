
var wins = 0;
var losses = 0;

let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let playerGuesses = [];


document.onkeyup = (function (event) {
  console.log(event.key);
  $("#your-guess").html(event.key);
  computerRandom = letters[Math.floor(Math.random() * 26)];
  console.log(computerRandom);
  $("#computer-guess").html(computerRandom);
  playerGuesses.push(event.key)
  $("#your-guesses").html(playerGuesses);

   if (event.key === computerRandom) {
     wins++
     $("#wins").html(wins);
   } else  {
      losses++
      $("#losses").html(losses);
    }
   })

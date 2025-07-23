// Play one game of rock-paper scissors

// Set up computer score
let computerScore = 0;

// Set up human score
let humanScore = 0;

// Create a function for computer choice
function computerChoice() {
    // Ask for computer input from one to three
    let computerInput = Math.floor(Math.random() * 3 + 1);

    // One is for paper; Two is for rock; Three is for scissors
   switch (computerInput) {
    case 1: 
        computerInput = "paper";
        break;
    case 2:
        computerInput = "rock";
        break;
    case 3:
        computerInput = "scissors";
        break
   }
   return computerInput;
}

// Create a function for human choice
function humanChoice() {
    // Ask for human input: paper(1), rock(2), or scissors(3)
    let humanInput = prompt("Rock, paper, or scissors? Type the word correctly.")

    // Make human input case insensitive
    humanInput = humanInput.toLowerCase();

    // Ask again if humanInput is invalid (implement this at a later time)
    //
    
    return humanInput;
}

humanChoice();



// Compare human input from computer input
    // if human input and computer input is the same, it is a tie
     // alert tie
     // no points added
    // Write winning condition 1: paper vs rock
        // alert you won
        // add points
    // Write winning condition 2: scissors vs paper
        // alert you won
        // add points
    // Write winning condition 3: rock vs scissors
        // alert you won
        // add points
    // Else, you lose and computer gains a point;
        // alert you lose
        // add computer points

// Create a while loop until any score reaches five
    // if human score equals to five
        // alert you win
    // else
        // you lose


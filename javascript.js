// Play one game of rock-paper scissors

// Set up computer score
let computerScore = 0;

// Set up human score
let humanScore = 0;

// Create a function for computer choice
function getComputerChoice() {
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
   console.log(computerInput)
   return computerInput;
}

// Create a function for human choice
function getHumanChoice() {
    // Ask for human input: paper(1), rock(2), or scissors(3)
    let humanInput = prompt("Rock, paper, or scissors? Type the word correctly.")

    // Make human input case insensitive
    humanInput = humanInput.toLowerCase();

    // Ask again if humanInput is invalid (implement this at a later time)
    console.log(humanInput);
    return humanInput;
}

function playRound(humanChoice, computerChoice) {
    // Compare human input from computer input
    // if human input and computer input is the same, it is a tie
    if (humanChoice == computerChoice) {
        // alert tie
        // no points added
        alert(`Tie! You and the AI chose ${computerChoice}.`);
    }
    // Write winning condition 1: paper vs rock
    else if (humanChoice == "paper" && computerChoice == "rock") {
        // alert you won
        alert(`You won! You chose ${humanChoice}. AI chose ${computerChoice}.`);
        // add points
        humanScore++;
    }
        
    // Write winning condition 2: scissors vs paper
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        // alert you won
        alert(`You won! You chose ${humanChoice}. AI chose ${computerChoice}.`);
        // add points
        humanScore++;
    }

    // Write winning condition 3: rock vs scissors
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        // alert you won
        alert(`You won! You chose ${humanChoice}. AI chose ${computerChoice}.`);
        // add points
        humanScore++;
    }

    // Else, you lose and computer gains a point;
    else {
        // alert you lose
        alert(`You lost! You chose ${humanChoice}. AI chose ${computerChoice}.`);
        // add computer points
        computerScore++;
    }
}



// Create a function called play game
// Create a while loop until any score reaches five
    // if human score equals to five
        // alert you win
    // else
        // you lose


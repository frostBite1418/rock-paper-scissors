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
   return computerInput;
}

// Create a function for human choice
function getHumanChoice() {
    // Ask for human input: paper(1), rock(2), or scissors(3)
    let humanInput = prompt("Rock, paper, or scissors? Type the word correctly.")

    // Make human input case insensitive
    humanInput = humanInput.toLowerCase();

    // Ask again if humanInput is invalid (implement this at a later time)
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

// Play the whole game
function playGame() {
    // Loop the game five times to play five rounds
    
    // Call getHumanChoice and getComputerChoice to run the functions
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
        
    // Call playRound function to analyze the winner and tally score
    playRound(humanSelection, computerSelection);
    

    // Announce the winner
    // If human score is higher than computer score, alert human wins
    if (humanScore > computerScore) {
        alert("You won the game against AI.");
    }
    // If scores are the same, it is a tie
    else if (humanScore == computerScore) {
        alert("You tied against an AI.");
    }
    // Else, human loses
    else {
        alert("You lost against AI. Take that.");
    }
}

playGame();

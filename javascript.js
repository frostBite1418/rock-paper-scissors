alert("Play a game of rock-paper-scissors against AI. First to five wins.\n\nTo restart to zero when you reach five, click any of the choice buttons.")

const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const rockButton = document.querySelector(".rock");
const textScore = document.querySelector(".textScore");

// display score variables
let displayHumanScore = document.querySelector("#displayHumanScore");
let displayComputerScore = document.querySelector("#displayComputerScore");

// display text in illustration boxes variables
let displayHumanGraphics = document.querySelector(".human-rps-choice");
let displayComputerGraphics = document.querySelector(".computer-rps-choice");

// display text content: did you win or lose?
let displayTextContent = document.querySelector(".textScore");

// Set up computer score
let computerScore = 0

// Set up human score
let humanScore = 0;

// play rounds using buttons
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));
rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));

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

function playRound(humanChoice, computerChoice) {

    // Check if any score has reached five. If it has, game will stop.
    if (!(humanScore === 5 || computerScore === 5)) {
        displayHumanGraphics.textContent = humanChoice;
        displayComputerGraphics.textContent = computerChoice;

        // compare input to declare who wins and who loses
        if (humanChoice == computerChoice) {
            // alert tie
            // no points added
            displayTextContent.textContent = `Tie. You chose ${humanChoice}. AI chose ${computerChoice}`;
        }
        // Write winning condition 1: paper vs rock
        else if (humanChoice == "paper" && computerChoice == "rock") {
            // add points
            humanScore++;
            displayHumanScore.textContent = humanScore;
            displayTextContent.textContent = `You win. You chose ${humanChoice}. AI chose ${computerChoice}`;
        }
            
        // Write winning condition 2: scissors vs paper
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            // add points
            humanScore++;
            displayHumanScore.textContent = humanScore;
            displayTextContent.textContent = `You win. You chose ${humanChoice}. AI chose ${computerChoice}`;
        }

        // Write winning condition 3: rock vs scissors
        else if (humanChoice == "rock" && computerChoice == "scissors") {
            // add points
            humanScore++;
            displayHumanScore.textContent = humanScore;
            displayTextContent.textContent = `You win. You chose ${humanChoice}. AI chose ${computerChoice}`;
        }

        // Else, you lose and computer gains a point;
        else {
            // add computer points
            computerScore++;
            displayComputerScore.textContent = computerScore;
            displayTextContent.textContent = `You lose. You chose ${humanChoice}. AI chose ${computerChoice}`;
        }
    } else {
        humanScore = 0;
        computerScore = 0;
        displayHumanScore.textContent = humanScore;
        displayComputerScore.textContent = computerScore;
    }

}
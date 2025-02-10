
let playerWins = 0;
let computerWins = 0;

// Function for computer choice
function computerChoice(){
    let numChoice = Math.random();
    if(numChoice < 0.39){
        return "Rock"
    }
    else if(0.7 > numChoice > 0.39){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}

// Function for player choice
function playerChoice(){
    let playerChoice = prompt("Rock (1), Paper (2), Scissors(3)?", "Enter a number option!");
    
	switch(playerChoice){
		case "1":
			return "Rock"
			break;
		
		case "2":
			return "Paper"
			break;
			
		case "3":
			return "Scissors"
			break;
			
		default:
			return null;
	}
}

// Function to handle single round of game
function turn(playerTurn, computerTurn){
	
	if(playerTurn === "Rock"){
		
		if(computerTurn === "Rock"){
			console.log("DRAW");
		}
		else if(computerTurn === "Paper"){
			incrementComputer();
			console.log("COMPUTER WINS");
		}
		else if(computerTurn === "Scissors"){
			incrementPlayer();
			console.log("PLAYER WINS");
		}
		
	}
	
	else if(playerTurn === "Paper"){
		
		if(computerTurn === "Rock"){
			incrementPlayer();
			console.log("PLAYER WINS");
		}
		else if(computerTurn === "Paper"){
			console.log("DRAW");
		}
		else if(computerTurn === "Scissors"){
			incrementComputer();
			console.log("COMPUTER WINS");
		}
		
	}
	
	else if(playerTurn === "Scissors"){
		
		if(computerTurn === "Rock"){
			incrementComputer();
			console.log("COMPUTER WINS");
		}
		else if(computerTurn === "Paper"){
			incrementPlayer();
			console.log("PLAYER WINS");
		}
		else if(computerTurn === "Scissors"){
			console.log("DRAW");
		}
		
	}
	
	else{
		console.log("Not a valid optiont");
	}
}

function incrementPlayer(){playerWins++}
function incrementComputer(){computerWins++}

function decideWinner(){

	if(playerWins > computerWins){
		console.log("Player wins!");
		return playerWins;
	}
	else if(computerWins > playerWins){
		console.log("Computer Wins!");
		return computerWins;
	}
	else{
		console.log("Draw")
	}
}

// This is the game loop
for(i = 0; i <= 5; i++){
	let playerTurn = playerChoice();
	let computerTurn = computerChoice();
	console.log("Player: " + playerTurn);
	console.log("Computer: " + computerTurn);
	turn(playerTurn,computerTurn);
};

// End result comparisons
console.log("------------------------------------------------------")
console.log("Results:");
console.log("Player: " + playerWins);
console.log("Computer: " + computerWins);
decideWinner();
console.log("------------------------------------------------------")





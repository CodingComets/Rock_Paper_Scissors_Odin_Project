console.log('Happy developing ✨')
console.log('Happy developing ✨')
console.log('Happy developing ✨')

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
    console.log("Please select an option:")
    console.log("1: Rock")
    console.log("2: Paper")
    console.log("3: Scissors")

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

let playerTurn = playerChoice();
let computerTurn = computerChoice();

function turn(playerTurn, computerTurn){
	
	if(playerTurn === "Rock"){
		
		if(computerTurn === "Rock"){
			console.log("DRAW");
		}
		else if(computerTurn === "Paper"){
			console.log("COMPUTER WINS");
		}
		else if(computerTurn === "Scissors"){
			console.log("PLAYER WINS");
		}
		
	}
	
	else if(playerTurn === "Paper"){
		
		if(computerTurn === "Rock"){
			console.log("PLAYER WINS");
		}
		else if(computerTurn === "Paper"){
			console.log("DRAW");
		}
		else if(computerTurn === "Scissors"){
			console.log("COMPUTER WINS");
		}
		
	}
	
	else if(playerTurn === "Scissors"){
		
		if(computerTurn === "Rock"){
			console.log("COMPUTER WINS");
		}
		else if(computerTurn === "Paper"){
			console.log("PLAYER WINS");
		}
		else if(computerTurn === "Scissors"){
			console.log("DRAW");
		}
		
	}
	
	else{
		console.log("Not a valid option");
	}
}

console.log("Player: " + playerTurn);
console.log("Computer: " + computerTurn);
turn(playerTurn,computerTurn);

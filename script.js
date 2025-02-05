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

    let playerChoice = prompt("Rock, Paper, Scissors?", "Default Value");
    
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
let computerTurn = computerChoice()

console.log(playerTurn);
console.log(computerTurn);

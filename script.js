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

function playerChoice(){
    console.log("Please select an option:")
    console.log("1: Rock")
    console.log("2: Paper")
    console.log("3: Scissors")

    let playerChoice = prompt("Message to the user", "Default Value");
    console.log(playerChoice);
}

console.log(computerChoice());
playerChoice();

 var userScore = 0 
 var computerScore = 0

compare = function(choice1,choice2){
    if (choice1 === choice2) {
        return "It's a tie!";
    }
	    if (choice1 === "rock") {
	        if (choice2 === "scissors") {
	            // rock wins
	            return "You win!";
	            userScore +=1;
	        } else {
	            // paper wins
	            return "You lose! Try again.";
	            computerScore+=1;
	        }
	    }
	    if (choice1 === "paper") {
	        if (choice2 === "rock") {
	            // paper wins
	            return "You win!";
	            userScore +=1;
	        } else {
	            // scissors wins
	            return "You lose! Try again.";
	            computerScore+=1;
	        }
	    }
	    if (choice1 === "scissors") {
	        if (choice2 === "rock") {
	            // rock wins
	            return "You lose! Try again.";
	            computerScore+=1;
	        } else {
	            // scissors wins
	            return "You win!";
	            userScore +=1;
	        }
	    }
}

playRoshambo = function(clientGesture){
       if (clientGesture=='rock'){
       	var userChoice='rock';
       } 
       if(clientGesture=='paper'){
       	var userChoice='paper';
       }
       if(clientGesture=='scissors'){
       	var userChoice='scissors';
       }
       
       
       
        var userChoicePrinted = ("<p>Player 1:" + " " + userChoice + "</p>");
        writeHere.innerHTML = userChoicePrinted;

        // Computer choice
        var computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if(computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        // Display computer choice
        var computerChoicePrinted=("<p>Computer:" + " " + computerChoice + "</p>");
        writeHere.innerHTML = userChoicePrinted + computerChoicePrinted;

   		// var userScore = 0 
 		// var computerScore = 0
 
        var results = compare(userChoice,computerChoice);

        // if (results)="You Win!" {
        // 	userScore+=1
        // }
        // else (results)="You lose! Try again."{
        // 	computerScore+=1
        // }
        writeHere.innerHTML = userChoicePrinted + computerChoicePrinted + results;
}

        writePlayerScore.innerHTML = userScore
        writeCpuScore.innerHTML = computerScore














// I didn't need this fucntion, didn't wanna trhow it out though

// function printResults(results) {
//   var elem = document.getElementById('write-here');
//   document.write(results);
// }



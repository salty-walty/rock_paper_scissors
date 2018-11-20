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
















// function printResults(results) {
//   var elem = document.getElementById('write-here');
//   document.write(results);
// }


// $(".move").click(function() {
// 	$(this).css('background-color','pink');
// 	$(this).toggleClass("shadow");
// });

// $(".move").mouseover(function() {
// 	$(this).css('background-color','#E6E6FA');
// });

// $(".move").mouseout(function() {
// 	$(this).css('background-color','#E6E6FA');
// });

//above is early zootery, below is a rip


// <script>
//         // User choice
//         var userChoice = prompt("Do you choose rock, paper or scissors?");
//         if (! userChoice) {
//             // User choice was undefined
//             document.write("<p>Player 1, you cheated! Refresh this screen and fight like a man.</p>");
//         } else {
//             // Display user choice
//             document.write("<p>Player 1:" + " " + userChoice + "</p>");
//         }
//         // Computer choice
//         var computerChoice = Math.random();
//         if (computerChoice < 0.34) {
//             computerChoice = "rock";
//         } else if(computerChoice <= 0.67) {
//             computerChoice = "paper";
//         } else {
//             computerChoice = "scissors";
//         }
//         // Display computer choice
//         document.write("<p>Computer:" + " " + computerChoice + "</p>");
//         // Compare user choice vs computer choice
//         var compare = function(choice1,choice2) {
//             if (choice1 === choice2) {
//                 return "It's a tie!";
//             }
//             if (choice1 === "rock") {
//                 if (choice2 === "scissors") {
//                     // rock wins
//                     return "You win!";
//                 } else {
//                     // paper wins
//                     return "You lose! Try again.";
//                 }
//             }
//             if (choice1 === "paper") {
//                 if (choice2 === "rock") {
//                     // paper wins
//                     return "You win!";
//                 } else {
//                     // scissors wins
//                     return "You lose! Try again.";
//                 }
//             }
//             if (choice1 === "scissors") {
//                 if (choice2 === "rock") {
//                     // rock wins
//                     return "You lose! Try again.";
//                 } else {
//                     // scissors wins
//                     return "You win!";
//                 }
//             }
//         };
//         // Run the compare function
//         var results = compare(userChoice,computerChoice);
//         // Display results
//         document.write("<br><hr><br>" + results);
// </script>


// <script>
// // playRoshambo = function(clientGesture){

//  //server always chooses rock

// if (clientGesture=='rock') {

// result = "tie";

//  }

//  if (clientGesture=='paper') {

// result = "win";

//  }  

//  if (clientGesture=='scissors') {

// result = "lose";

//  }    

//  alert("You " + result + "!");

// }

// </script>

// </head>

// playRoshambo = function(clientGesture){
//        if (clientGesture='rock'){
//        	var userChoice='rock';
//        } else if(clientGesture='paper'){
//        	var userChoice='paper';
//        }else if(userChoice='scissors'){
//        	var userChoice='scissors';
//        }
       
       

//         document.write("<p>Player 1:" + " " + userChoice + "</p>");

//         // Computer choice
//         var computerChoice = Math.random();
//         if (computerChoice < 0.34) {
//             computerChoice = "rock";
//         } else if(computerChoice <= 0.67) {
//             computerChoice = "paper";
//         } else {
//             computerChoice = "scissors";
//         }
//         // Display computer choice
//         document.write("<p>Computer:" + " " + computerChoice + "</p>");
//         // Compare user choice vs computer choice
//         compare = function(choice1,choice2) {
//             if (choice1 === choice2) {
//                 return "It's a tie!";
//             }
//             if (choice1 === "rock") {
//                 if (choice2 === "scissors") {
//                     // rock wins
//                     return "You win!";
//                 } else {
//                     // paper wins
//                     return "You lose! Try again.";
//                 }
//             }
//             if (choice1 === "paper") {
//                 if (choice2 === "rock") {
//                     // paper wins
//                     return "You win!";
//                 } else {
//                     // scissors wins
//                     return "You lose! Try again.";
//                 }
//             }
//             if (choice1 === "scissors") {
//                 if (choice2 === "rock") {
//                     // rock wins
//                     return "You lose! Try again.";
//                 } else {
//                     // scissors wins
//                     return "You win!";
//                 }
//             }
//         };
//     }
//         // Run the compare function
//         var results = compare(userChoice,computerChoice);
//         // Display results
//         document.write("<br><hr><br>" + results);
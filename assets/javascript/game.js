	//computer chooses a letter at random
		//make a list of available letters
		var wins = 0;
		var losses = 0;
		var guessCount = 9;
		var guesses = [];
		var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

		//choose a letter from list at random
		var rand  = Math.floor(Math.random() * 26) + 1;

		//assign computer choice to variable
		var computerChoice = letters[rand];

		var reset = function() {
			alert("Game Reset");
			guessCount = 9;
			document.getElementById("guessCount").innerHTML = guessCount;

			guesses.length = 0;
        	document.getElementById("guesses").innerHTML = guesses;

        	rand  = Math.floor(Math.random() * 26) + 1;
        	computerChoice = letters[rand];
		}

	//user chooses a letter to guess
		//create event listener for keystroke
		document.onkeyup = function(event) {
        
		//assign key choice to userchoice
        var userChoice = event.key;

        	if (computerChoice === userChoice) {
        		alert("User Wins");
        		document.getElementById("wins").innerHTML = ++wins;
        		reset();

        	} else {
        		document.getElementById("guessCount").innerHTML = --guessCount;
        		guesses.push(userChoice);
        		document.getElementById("guesses").innerHTML = guesses;
        		if (guessCount == 0) {
        		alert("User loses");
        		document.getElementById("losses").innerHTML = ++losses;
        		reset();

        		}
        	}
      	};
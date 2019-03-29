        var wins = 0;
        var losses = 0;
        var guessesLeft = 10;
        var userGuess
        var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var letterGuessed = []
        var computerGuess;

        var winsText = document.getElementById("wins-text");
        var lossesText = document.getElementById("losses-text");
        var guessesLeftText = document.getElementById("guesses-Left-text");
        var letterGuessedText = document.getElementById("letter-guessed-text");


        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log ("computer chose" , computerGuess)

        document.onkeyup = function (event) {
            var userGuess = event.key.toLowerCase();
            console.log(userGuess);
            
            if ((userGuess === computerGuess)) {
                wins++;
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                console.log ("computer chose" , computerGuess)
            }
            if ((userGuess !== computerGuess)) {
                guessesLeft--;
                letterGuessed.push(userGuess);

            }
            if ((guessesLeft === 0)) {
                losses++;
                guessesLeft = 10
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                console.log ("computer chose" , computerGuess)
                letterGuessed.length = 0
            }

            winsText.textContent = "wins: " + wins;
            lossesText.textContent = "losses: " + losses;
            guessesLeftText.textContent = "guesses left: " + guessesLeft;
            letterGuessedText.textContent = "letters guessed: " + letterGuessed.join(", ");
v
        }
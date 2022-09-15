const prompt = require('prompt-sync')();
const randomWords = require('random-words');


function hangmanGameInit (){

    console.log("Welcome to the game")
    let name = getName();


    let wordNum = 20;
    const words = generateRandomWords(wordNum);

    let chosenWord = words[Math.floor(Math.random()*wordNum)];
    chosenWord = chosenWord.split("");

    let guessLines = new Array (chosenWord.length).fill('_');
    console.log(guessLines);
    let badGuessCount = 0;

   hangmanRun(chosenWord,name,guessLines, badGuessCount)

}

function hangmanRun (chosenWord,name,guessLines, badGuessCount){

    let guessKey = false;
    let userChoice = prompt("Please choose to guess a word [W] or a letter [L]: ");

    if (userChoice === 'L'){
        let letter = prompt('What is your letter [lowercase please]: ');

        for(let i = 0; i < chosenWord.length; i++) {

            if(letter == chosenWord[i]){
                
                guessLines[i] = letter;
                guessKey = true;

            } 
        }

        if (!guessKey){
            badGuessCount++;
        }

        if(gameOver(badGuessCount)){
            console.log("Game Over!");
            let askAgain = prompt("Again ? : ");
            if(askAgain === 'Y'){
                hangmanGameInit();
            }
        }else {
            console.log("Wrong letter. Try again.");
            console.log(`Current status: ${guessLines}`);
            hangmanRun(chosenWord,name,guessLines, badGuessCount);
        }
    }else if (userChoice === "W"){
        let wordGuess = prompt('What is your word [lowercase please]: ');
        if (wordGuess === chosenWord.join("")){
            console.log(`${name} you have won!`);
        } else {
            console.log("Game Over!");
            let askAgain = prompt("Again ? : ");
            if(askAgain === 'Y'){
                hangmanGameInit();
            }
        }
    }
    
}

function generateRandomWords(wordNum){
    return randomWords(wordNum);
}

function getName(){
    return prompt("Please enter your name: ");
}

function gameOver(badGuessCount){
    if (badGuessCount === 6){
        return true;
    }else{
        return false;
    }
}

//hangmanGameInit();

module.exports = {
    hangmanGameInit,
    hangmanRun,
    generateRandomWords,
    getName,
    gameOver
}











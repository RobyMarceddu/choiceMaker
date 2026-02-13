const prompt = require('prompt-sync')();

const modeChoice = Number(prompt("Choose a mode: "))

const wordsMode = () => {if (modeChoice === 1) {

    const words = ['yes','no', 'maybe', 'ask me later'];

const randomIndex = Math.floor(Math.random() * words.length);

console.log('Magic Ball says: ' + [randomIndex]);

return words[randomIndex];
}};


const numberMode = () => {if (modeChoice === 2) {
    
    let min = Number(prompt("minimum number: "));
    let max = Number(prompt("maximum number: "));

    const numbers = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log("Lucky number is: " + numbers);;
    return numbers;
}};


const mode = modeChoice === 1 ? wordsMode : numberMode;

console.log(mode);

if (modeChoice === 1 ) {
    wordsMode();
} 
else if (modeChoice === 2) {
    numberMode();
}
else {
    console.log("Invalid mode choice");
    return;
    }









const prompt = require('prompt-sync')();

const modeChoice = Number(prompt("Choose a mode: "))

const wordsMode = () => {modeChoice === 1};
const numberMode = () => {modeChoice === 2};


const mode = modeChoice === 1 ? wordsMode : numberMode;

console.log(mode);


function choiceMakerWorlds () {
    const words = ['yes','no', 'maybe', 'ask me later'];

const randomIndex = Math.floor(Math.random() * words.length);

return words[randomIndex];
}

function choiceMakerNumber (min, max) {
    
    const numbers = Math.floor(Math.random() * (max - min + 1)) + min;
    return numbers;
}



if (modeChoice === 1) {
    const words = choiceMakerWorlds();
    console.log(words);
}
 
else if (modeChoice === 2) {
    let minRange = Number(prompt("minimum number: "));
    let maxRange = Number(prompt("maximum number: "));


    console.log(choiceMakerNumber(minRange, maxRange));
    }








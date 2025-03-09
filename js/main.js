//Grabbing the bet min and max buttons from the DOM
let betMin = document.querySelector('#betMin').addEventListener('click', spinSlotsMin);
let betMax = document.querySelector('#betMax').addEventListener('click', spinSlotsMax);

//Object that contains 6 options 
const slotSymbols = {
    cherry: "🍒",
    lemon: "🍋",
    watermelon: "🍉",
    star: "⭐",
    orange: "🍊",
    bell: "🔔"
}
//Object.values() is a built in function or method or prototype inside of javascript
//Grabs all the values of the slotSymbols array and creates a new array just the values
//bankroll section grabbed from the DOM and currentBankroll variable created so the score can update based on the result of the spinSlotsMin or spinSlotsMax function
const symbolsArray = Object.values(slotSymbols);
let bankroll = document.querySelector('#bankroll');
let currentBankroll = 1000;

console.log(symbolsArray);

function getRandomSymbol() {
    //randomizes the elements inside the array and returns one of the random index with bracket notation to return the value of the object;
    return symbolsArray[Math.floor(Math.random() * symbolsArray.length)];
}

function spinSlotsMin() {
    //chooses slotSymbols object properties in each of the slots
    let slot1 = getRandomSymbol();
    let slot2 = getRandomSymbol();
    let slot3 = getRandomSymbol();

    //learn textContent, innerText, innerHTML in Anki
    //textContent is faster than innerText and no styling is needed currently
    document.getElementById('slot1').textContent = slot1;
    document.getElementById('slot2').textContent = slot2;
    document.getElementById('slot3').textContent = slot3;

    //if betMin is clicked and 3 slots same, increase bankroll 50, else decrease 5
    if(slot1 === slot2 && slot2 === slot3) {
        currentBankroll += 50;
        bankroll.innerText = `Current Bankroll: ${currentBankroll}`;
        document.getElementById('result').textContent = "cha-ching";
    } else {
        currentBankroll -=5;
        bankroll.innerText = `Current Bankroll: ${currentBankroll}`;
        document.getElementById('result').textContent = "time to pay up";
    }
}

function spinSlotsMax() {
    //chooses slotSymbols object properties in each of the slots
    let slot1 = getRandomSymbol();
    let slot2 = getRandomSymbol();
    let slot3 = getRandomSymbol();

    //learn textContent, innerText, innerHTML in Anki
    //textContent is faster than innerText and no styling needs to be added
    document.getElementById('slot1').textContent = slot1;
    document.getElementById('slot2').textContent = slot2;
    document.getElementById('slot3').textContent = slot3;

    //if betMax is clicked and 3 slots same, increase bankroll 500, else decrease 50
    if(slot1 === slot2 && slot2 === slot3) {
        currentBankroll += 500;
        bankroll.innerText = `Current Bankroll: ${currentBankroll}`;
        document.getElementById('result').textContent = "you win";
    } else {
        currentBankroll -=50;
        bankroll.innerText = `Current Bank: ${currentBankroll}`;
        document.getElementById('result').textContent = "you lose";
    }
}

//Things to consider for the future:
//Player constructor function (player 1 vs player 2)
//Set winning conditions (you win if over 2k /you lose if it hits 0)
//Change you win to cha-ching and lose to time to pay up
//Create an animation everytime you press the button before showing the final result
//object person (name, last name, money)

//add to the todo list and add or take things away
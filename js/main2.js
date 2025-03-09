//Grabbing the bet min and max buttons from the DOM
let betMin = document.querySelector('#betMin');
let betMax = document.querySelector('#betMax');

betMin.addEventListener('click', () => spinSlots(5, 50));
betMax.addEventListener('click', () => spinSlots(50, 500));

const slotSymbols = "123456"


//bankroll section grabbed from the DOM and currentBankroll variable created so the score can update based on the result of the spinSlotsMin or spinSlotsMax function
let bankroll = document.querySelector('#bankroll');
let currentBankroll = 1000;

function getRandomSymbol() {
    //randomizes the characters inside the string and returns one of the random index/position and the range is set by the help of symbols.length;
    return slotSymbols.charAt(Math.floor(Math.random() * slotSymbols.length));
}

function spinSlots(betAmount, reward) {
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
        currentBankroll += reward;
        bankroll.innerText = `Current Bankroll: ${currentBankroll}`;
        document.getElementById('result').innerText = "cha-ching";
    } else {
        currentBankroll -= betAmount;
        bankroll.innerText = `Current Bankroll: ${currentBankroll}`;
        document.getElementById('result').innerText = "time to pay up";
    }
}

//Things to consider for the future:
//Player constructor function (player 1 vs player 2)
//Set winning conditions (you win if over 2k /you lose if it hits 0)
//Change you win to cha-ching and lose to time to pay up
//Create an animation everytime you press the button before showing the final result
//object person (name, last name, money)

//add to the todo list and add or take things away
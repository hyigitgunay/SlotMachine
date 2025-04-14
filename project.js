// 1. Despot Some Money (done)
// 2. determinr number oof lines to bet on (done)
// 3. Collect a bet amount  (done)
// 4. spin the slot machine
// 5. check if the user won
// 6. give the user their winnings 
// 7. play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNTS = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8

}

const SYMBOLS_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}

function spin() {
    const symbols = [];
    for (const [Symbol, count] of Object.entries(SYMBOLS_COUNTS)) {
        for (let i = 0; i < count; i++) {
            symbols.push(Symbol)
        }
    }

    const reels = [ [], [], [] ]; {
        for(let i = 0; i < COLS; i++ ) {

            const reelSymbols = [...symbols];
            for(let j = 0 ; j< ROWS; j++ ){
                const randomIndex = Math.floor(Math.random() * reelSymbols.length);
                const selectedSymbol = reelSymbols[randomIndex];
                reels[i].push(selectedSymbol);
                reelSymbols.splice(randomIndex , 1);
            }
    }

}
}




function deposit() {
    while (true) {
        const depositAmount = prompt("Enter a Deposit Amount : ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount , try again.");
        }
        else {
            return numberDepositAmount
        }
    }
};
function getNumberofLines() {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on(1-3) : ");
        const numberofLines = parseFloat(lines);

        if (isNaN(numberofLines) || numberofLines <= 0 || numberofLines > 3) {
            console.log("Invalid number of lines , try again.");
        }
        else {
            return numberofLines
        }
    }
};

function getBet(balance, lines) {
    while (true) {
        const bet = prompt("Enter the total bet : ");
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid number of lines , try again.");
        }
        else {
            return numberBet
        }
    }
}


let balance = deposit();
getNumberofLines();
getBet();
spin();
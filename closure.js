//CLOSURE
function greeting() {
    let username = 'Mario';
    function displayUserName() {
        return `Hello $(userName)`;
    }
    return displayUserName;
}
const g = greeting();
console.log(g);
console.log(g());

// Alcancia: moneyBox
function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
}
const myMoneyBox = moneyBox();
moneyBox(4);
moneyBox(8);
moneyBox(2);
function moneyBox(){
    let saveCoins = 0;
    function putCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }

    return putCoins;
}

const myMoneyBox = moneyBox();

myMoneyBox(7);
myMoneyBox(8);

const annaMoneyBox = moneyBox();
annaMoneyBox(5);
annaMoneyBox(51);
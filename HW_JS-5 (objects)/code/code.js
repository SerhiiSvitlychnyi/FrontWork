/*
Создайте объект криптокошелек. В кшельке должно храниться имя владельца, несколько валют, в каждой валюте есть имя валюты,логотип,
несколько монет и курс на сегодняшний день. Так же в объекте кошелек есть метод, при вызове которого он принимает имя валюты и 
выводит на страницу информацию: "Добрый день, ...! На вашем балансе (название валюты и логотип) осталось N монет, если вы сегодня продадите их, 
то получите ... грн.". Вывод на страницу должен быть красиво оформлен с использованием html и css.
*/

const crypto_wallet = {
    user_name: "Христина &#128140",
    bitcoin: {
        name: "Bitcoin",
        logo: "<img src='https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'>",
        coin: 150,
        rate: 21938.01
    },    
    ethereum: {
        name: "Ethereum",
        logo: "<img src='https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'>",
        coin: 100,
        rate: 1534.10
    },
    stellar: {
        name: "Stellar",
        logo: "<img src='https://s2.coinmarketcap.com/static/img/coins/64x64/512.png'>",
        coin: 50,
        rate: 0.0867
    },
    show: function(coinName){
        /*document.getElementById("wallet").innerHTML = `<p>Добрый день, ${crypto_wallet.user_name}! <tr> На 
        вашем балансе ${crypto_wallet[coinName].name} ${crypto_wallet[coinName].logo} осталось ${crypto_wallet[coinName].coin} монет, 
        если вы сегодня продадите их, то получите ${(crypto_wallet[coinName].coin * crypto_wallet[coinName].rate * 39).toFixed(2)}грн.`
    */
        document.write(`<h1>Добрий день, ${crypto_wallet.user_name}!</h1>`);
        document.write(`<p>На вашем балансе ${crypto_wallet[coinName].name} ${crypto_wallet[coinName].logo} осталось ${crypto_wallet[coinName].coin} монет.</p>`);
        document.write(`<p>Eсли вы сегодня продадите их, то получите ${(crypto_wallet[coinName].coin * crypto_wallet[coinName].rate * 39).toFixed(2)}грн.</p>`);
    }
}

crypto_wallet.show(prompt("Укажите валюту:", "bitcoin, ethereum, stellar"));
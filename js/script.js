let PLN_PLN = 1;
let PLN_EURO = 0.2099;
let PLN_USD = 0.2194;
let PLN_CHF = 0.2131;
let PLN_GBP = 0.1789;

let rateToconvert;
let rate;
let firstCurrency = document.querySelector(".js-exchangerForm__firstCurrency");
let amountFirstcurrency = document.querySelector(".js-exchangerForm__amountFirstcurrency")
let secoundCurrency = document.querySelector(".js-exchangerForm__secoundCurrency");
let amountSecoundcurrency = document.querySelector(".js-exchangerForm__amountSecoundcurrency");
let form = document.querySelector(".js-exchangerForm");
let amountRate = document.querySelector(".js-exchangerForm__amountExchangerate");
let summaryExchangetext = document.querySelector(".js-exchangerForm__summaryExchange");

form.addEventListener("input", () => {
    if (amountFirstcurrency.value > 0) {
        summaryExchangetext.style.display = "table-cell";
    }
    switch (firstCurrency.value) {
        case "PLN": {
            rateToconvert = PLN_PLN;
        }
            break;
        case "EURO": {
            rateToconvert = PLN_EURO;
        } break;
        case "USD": {
            rateToconvert = PLN_USD
        } break;
        case "GBP": {
            rateToconvert = PLN_GBP;
        } break;
        case "CHF": {
            rateToconvert = PLN_CHF;
        } break;
    }
    switch (secoundCurrency.value) {
        case "PLN": {
            rate = PLN_PLN / rateToconvert;
            countingValue(rate);
        }
            break;
        case "EURO": {
            rate = PLN_EURO / rateToconvert;
            countingValue(rate);
        } break;
        case "USD": {
            rate = PLN_USD / rateToconvert;
            countingValue(rate);
        } break;
        case "GBP": {
            rate = PLN_GBP / rateToconvert;
            countingValue(rate);
        } break;
        case "CHF": {
            rate = PLN_CHF / rateToconvert;
            countingValue(rate);
        } break;
    }
});
function countingValue(rate) {
    if (amountFirstcurrency.value < 0) { /*Zablokowanie wpisywania i przeliczania liczb ujemnych*/
        amountFirstcurrency.value = Math.abs(amountFirstcurrency.value);
    }
    amountSecoundcurrency.value = (amountFirstcurrency.value * rate).toFixed(2);
    amountRate.value = rate.toFixed(4);
    summaryExchangetext.innerHTML = firstCurrency.value === secoundCurrency.value ? `Choose another currency` : (`${amountFirstcurrency.value} ${firstCurrency.value} = ${amountSecoundcurrency.value} ${secoundCurrency.value}`);
}


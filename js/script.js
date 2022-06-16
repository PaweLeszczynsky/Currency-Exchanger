let PLN_EURO = 0.22;
let PLN_USD = 0.23;
let PLN_CHF = 0.23;
let PLN_GBP = 0.19;
let EURO_PLN = 4.58;
let EURO_USD = 1.07;
let EURO_GBP = 0.85;
let EURO_CHF = 1.05;
let USD_PLN = 4.27;
let USD_EURO = 0.94;
let USD_GBP = 0.80;
let USD_CHF = 0.98;
let CHF_PLN = 4.38;
let CHF_EURO = 0.96;
let CHF_USD = 1.02;
let CHF_GBP = 0.82;
let GBP_PLN = 5.36;
let GBP_EURO = 1.17;
let GBP_USD = 1.25;
let GBP_CHF = 1.23;
let rate;
let firstCurrency = document.querySelector(".firstCurrency");
let amountFirstcurrency = document.querySelector(".amountFirstcurrency")
let secoundCurrency = document.querySelector(".secoundCurrency");
let amountSecoundcurrency = document.querySelector(".amountSecoundcurrency");
let exchangedValue = document.querySelector(".summaryExchange");
let form = document.querySelector(".exchangerField");
let amountRate = document.querySelector(".amountExchangerate");
let summaryExchangetext = document.querySelector(".summaryExchange");

form.addEventListener("input", (event) => {
    if (amountFirstcurrency.value > 0) {
        summaryExchangetext.style.display = "table-cell";
    } else {
    }
    switch (firstCurrency.value) {
        case "PLN": {
            switch (secoundCurrency.value) {
                case "EURO":
                    countingValue(PLN_EURO);
                    break;
                case "USD":
                    countingValue(PLN_USD);
                    break;
                case "GBP":
                    countingValue(PLN_GBP);
                    break;
                case "CHF":
                    countingValue(PLN_CHF);
                    break;
                case "PLN":
                    countingValue(1.00);
                    break;
            }
        }
            break;
        case "EURO": {
            switch (secoundCurrency.value) {
                case "EURO":
                    countingValue(1.00);
                    break;
                case "USD":
                    countingValue(EURO_USD);
                    break;
                case "GBP":
                    countingValue(EURO_GBP);
                    break;
                case "CHF":
                    countingValue(EURO_CHF);
                    break;
                case "PLN":
                    countingValue(EURO_PLN);
                    break;
            }
        } break;
        case "USD": {
            switch (secoundCurrency.value) {
                case "EURO":
                    countingValue(USD_EURO);
                    break;
                case "USD":
                    countingValue(1.00);
                    break;
                case "GBP":
                    countingValue(USD_GBP);
                    break;
                case "CHF":
                    countingValue(USD_CHF);
                    break;
                case "PLN":
                    countingValue(USD_PLN);
                    break;
            }
        } break;
        case "GBP": {
            switch (secoundCurrency.value) {
                case "EURO":
                    countingValue(GBP_EURO);
                    break;
                case "USD":
                    countingValue(GBP_USD);
                    break;
                case "GBP":
                    countingValue(1.00);
                    break;
                case "CHF":
                    countingValue(GBP_CHF);
                    break;
                case "PLN":
                    countingValue(GBP_PLN);
                    break;
            }
        } break;
        case "CHF": {
            switch (secoundCurrency.value) {
                case "EURO":
                    countingValue(CHF_EURO);
                    break;
                case "USD":
                    countingValue(CHF_USD);
                    break;
                case "GBP":
                    countingValue(CHF_GBP);
                    break;
                case "CHF":
                    countingValue(1.00);
                    break;
                case "PLN":
                    countingValue(CHF_PLN);
                    break;
            }
        } break;
    }
});
function countingValue(rate) {
    if (amountFirstcurrency.value < 0) { /*Zablokowanie wpisywania i przeliczania liczb ujemnych*/
        amountFirstcurrency.value = Math.abs(amountFirstcurrency.value);
    }
    amountSecoundcurrency.value = (amountFirstcurrency.value * rate).toFixed(2);
    amountRate.value = rate.toFixed(2);
    summaryExchangetext.innerHTML = (`${amountFirstcurrency.value} ${firstCurrency.value} = ${amountSecoundcurrency.value} ${secoundCurrency.value}`);
}

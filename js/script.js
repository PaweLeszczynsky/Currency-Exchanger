{
    const firstCurrency = document.querySelector(".js-exchangerForm__firstCurrency");
    const amountFirstcurrency = document.querySelector(".js-exchangerForm__amountFirstcurrency")
    const secoundCurrency = document.querySelector(".js-exchangerForm__secoundCurrency");
    const amountSecoundcurrency = document.querySelector(".js-exchangerForm__amountSecoundcurrency");
    const form = document.querySelector(".js-exchangerForm");
    const summaryExchangetext = document.querySelector(".js-exchangerForm__summaryExchange");

    const calculateAmount = (firstCurrencyValue, secoundCurrencyValue) => {
        let rateToconvert;
        const PLN_PLN = 1;
        const PLN_EURO = 0.2099;
        const PLN_USD = 0.2194;
        const PLN_CHF = 0.2131;
        const PLN_GBP = 0.1789;
        switch (firstCurrencyValue) {
            case "PLN": {
                rateToconvert = PLN_PLN;
            } break;
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
        switch (secoundCurrencyValue) {
            case "PLN": {
                return PLN_PLN / rateToconvert;
            }
            case "EURO": {
                return PLN_EURO / rateToconvert;
            }
            case "USD": {
                return PLN_USD / rateToconvert;
            }
            case "GBP": {
                return PLN_GBP / rateToconvert;
            }
            case "CHF": {
                return PLN_CHF / rateToconvert;
            }
        }
    }

    form.addEventListener("input", () => {
        const firstCurrencyValue = firstCurrency.value;
        const secoundCurrencyValue = secoundCurrency.value;
        if (amountFirstcurrency.value > 0) {
            summaryExchangetext.style.display = "table-cell";
        }
        const result = calculateAmount(firstCurrencyValue, secoundCurrencyValue);
        countingValue(result);

    });

    function countingValue(result) {
        let amountRate = document.querySelector(".js-exchangerForm__amountExchangerate");
        if (amountFirstcurrency.value < 0) { /*Zablokowanie wpisywania i przeliczania liczb ujemnych*/
            amountFirstcurrency.value = Math.abs(amountFirstcurrency.value);
        }
        amountSecoundcurrency.value = (amountFirstcurrency.value * result).toFixed(2);
        amountRate.value = result.toFixed(4);
        summaryExchangetext.innerHTML = firstCurrency.value === secoundCurrency.value ? `Choose another currency` : (`${amountFirstcurrency.value} ${firstCurrency.value} = ${amountSecoundcurrency.value} ${secoundCurrency.value}`);
    }
}

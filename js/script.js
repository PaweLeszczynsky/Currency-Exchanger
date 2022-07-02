{
    const showExchangedAmountText = (amountFirstCurrencyValue) => {
        const summaryExchangetext = document.querySelector(".js-exchangerForm__summaryExchange");
        if (amountFirstCurrencyValue > 0) {
            summaryExchangetext.style.display = "table-cell";
        }
    }

    const calculateRate = (firstCurrencyValue, secoundCurrencyValue) => {
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

    const amountRateText = (result) => {
        const amountRate = document.querySelector(".js-exchangerForm__amountExchangerate");
        amountRate.value = result.toFixed(4);
    }

    function convertNegativenumber() {
        const amountFirstcurrency = document.querySelector(".js-exchangerForm__amountFirstcurrency")
        if (amountFirstcurrency.value < 0) { /*Zablokowanie wpisywania i przeliczania liczb ujemnych*/
            amountFirstcurrency.value = Math.abs(amountFirstcurrency.value);
        }
    }

    const countingValue = (result, amountFirstCurrencyValue) => {
        const amountSecoundcurrency = document.querySelector(".js-exchangerForm__amountSecoundcurrency");
        amountSecoundcurrency.value = (amountFirstCurrencyValue * result).toFixed(2);
    }

    const exchangedAmountText = (firstCurrencyValue, secoundCurrencyValue, amountFirstCurrencyValue) => {
        const amountSecoundcurrency = document.querySelector(".js-exchangerForm__amountSecoundcurrency");
        const summaryExchangetext = document.querySelector(".js-exchangerForm__summaryExchange");
        summaryExchangetext.innerHTML = firstCurrencyValue === secoundCurrencyValue ? `Choose another currency` : (`${amountFirstCurrencyValue} ${firstCurrencyValue} = ${amountSecoundcurrency.value} ${secoundCurrencyValue}`);
    }  

    const form = document.querySelector(".js-exchangerForm");
    form.addEventListener("input", () => {
        const amountFirstcurrency = document.querySelector(".js-exchangerForm__amountFirstcurrency")
        const firstCurrency = document.querySelector(".js-exchangerForm__firstCurrency");
        const secoundCurrency = document.querySelector(".js-exchangerForm__secoundCurrency");
        const firstCurrencyValue = firstCurrency.value;
        const secoundCurrencyValue = secoundCurrency.value;
        const amountFirstCurrencyValue = amountFirstcurrency.value;
        showExchangedAmountText(amountFirstCurrencyValue);
        const result = calculateRate(firstCurrencyValue, secoundCurrencyValue);
        amountRateText(result);
        countingValue(result, amountFirstCurrencyValue);
        exchangedAmountText(firstCurrencyValue, secoundCurrencyValue, amountFirstCurrencyValue);
    });
}

{
    const showExchangedAmountText = (amountFirstcurrency) => {
        const summaryExchangetext = document.querySelector(".js-exchangerForm__summaryExchange");
        if (amountFirstcurrency > 0) {
            summaryExchangetext.style.display = "table-cell";
        }
    }

    const calculateRate = (firstCurrency, secoundCurrency) => {
        let rateToconvert;
        const PLN_PLN = 1;
        const PLN_EURO = 0.2099;
        const PLN_USD = 0.2194;
        const PLN_CHF = 0.2131;
        const PLN_GBP = 0.1789;
        switch (firstCurrency) {
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
        switch (secoundCurrency) {
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

    const convertNegativenumber = () => {
        const amountFirstcurrency = document.querySelector(".js-exchangerForm__amountFirstcurrency")
        if (amountFirstcurrency.value < 0) { /*Zablokowanie wpisywania i przeliczania liczb ujemnych*/
            amountFirstcurrency.value = Math.abs(amountFirstcurrency.value);
        }
    }

    const countingValue = (result, amountFirstcurrency) => {
        const amountSecoundcurrency = document.querySelector(".js-exchangerForm__amountSecoundcurrency");
        amountSecoundcurrency.value = (amountFirstcurrency * result).toFixed(2);
    }

    const exchangedAmountText = (firstCurrency, secoundCurrency, amountFirstcurrency) => {
        const amountSecoundcurrency = document.querySelector(".js-exchangerForm__amountSecoundcurrency");
        const summaryExchangetext = document.querySelector(".js-exchangerForm__summaryExchange");
        summaryExchangetext.innerHTML = firstCurrency === secoundCurrency ? `Choose another currency` : (`${amountFirstcurrency} ${firstCurrency} = ${amountSecoundcurrency.value} ${secoundCurrency}`);
    }

    const onFormSubmit = () =>{
        convertNegativenumber();
        const amountFirstcurrency = document.querySelector(".js-exchangerForm__amountFirstcurrency").value;
        const firstCurrency = document.querySelector(".js-exchangerForm__firstCurrency").value;
        const secoundCurrency = document.querySelector(".js-exchangerForm__secoundCurrency").value;
        showExchangedAmountText(amountFirstcurrency);
        const result = calculateRate(firstCurrency, secoundCurrency);
        amountRateText(result);
        countingValue(result, amountFirstcurrency);
        exchangedAmountText(firstCurrency, secoundCurrency, amountFirstcurrency);
    }

    const init = () => {
        const form = document.querySelector(".js-exchangerForm");
        form.addEventListener("input", onFormSubmit);
    }
    init();
}

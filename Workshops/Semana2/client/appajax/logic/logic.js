let selectCuntry = "";
const completed = (e) => {
    const data = JSON.parse(e.target.responseText);
    addOptions("countrys", data);
};
const completedCurrencys = (e) => {
    dataCurrency = JSON.parse(e.target.responseText);
    let usd = "usd";
    let eur = "eur";
    for (let key in dataCurrency) {
        if (key === selectCuntry) {
            const selectObject = dataCurrency[key];
            for (let currency in selectObject) {
                const value = selectObject[currency];
                if (currency === usd) {
                    document.getElementById('labelUsd').innerText = (1 / value).toFixed(2);
                } else if (currency === eur) {
                    document.getElementById('labelEur').innerText = (1 / value).toFixed(2);
                }
            }
        } else {
            const value = dataCurrency[key];
            console.log(key + ": " + value);
        }
    }

    console.log(dataCurrency);
};

const error = () => console.log(this.responseText);

function getHelloWorld() {
    const ajaxRequest = new XMLHttpRequest();
    ajaxRequest.addEventListener("load", completed);
    ajaxRequest.addEventListener("error", error);
    ajaxRequest.open("GET", "http://localhost:3333/countrys");
    ajaxRequest.send();

}
function getCurrencys(selectCuntry) {
    const ajaxRequest = new XMLHttpRequest();
    ajaxRequest.addEventListener("load", completedCurrencys);
    ajaxRequest.addEventListener("error", error);
    ajaxRequest.open("GET", `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${selectCuntry}.json`);
    ajaxRequest.send();
}

function addOptions(domElement, array) {
    var select = document.getElementById(domElement);
    for (value in array) {
        var option = document.createElement("option");
        option.text = array[value].countryName;
        option.value = array[value].currencyCode;
        option.className ="option";
        select.add(option);
    }
}
function handleInputChangeMoney(select) {
    selectCuntry = select.value.toLowerCase();
    getCurrencys(select.value.toLowerCase());
}
function onMyLoad() {
    getHelloWorld();

}




var btnTranslate = document.querySelector("#btn-translate");
//console.log(btnTranslate);
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

console.log(outputDiv);

function clickHandler () {
    console.log("clicked");
    console.log("input is:", txtInput.value);
};

btnTranslate.addEventListener("click", clickHandler)


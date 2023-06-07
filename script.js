var btnTranslate = document.querySelector("#button");
var textInput = document.querySelector("#input");
var textOutput = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getUrl(text) {
  return serverURL + "?text=" + text;
}

function clickHandler() {
  var input = textInput.value;
  fetch(getUrl(input))
    .then((response) => response.json())
    .then((result) => {
      textOutput.innerHTML = result.contents.translated;
    });
}
btnTranslate.addEventListener("click", clickHandler);

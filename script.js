var btnTranslate = document.querySelector("#button");
var textInput = document.querySelector("#input");
var textOutput = document.querySelector("#output");

function clickHandler() {
  console.log("Clicked");
  console.log(textInput.value);
  textOutput.innerText = textInput.value;
}
btnTranslate.addEventListener("click", clickHandler);

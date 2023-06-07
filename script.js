var btnTranslate = document.querySelector("#button");
var textInput = document.querySelector("#input");

function clickHandler() {
  console.log("Clicked");
  console.log(textInput.value);
}
btnTranslate.addEventListener("click", clickHandler);

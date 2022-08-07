/*
let count = 0;
window.onload = function () {
  let button = document.getElementById("clickme");
  button.onclick = handleClick;
};
function handleClick() {
  let message = "You clicked me ";
  let div = document.getElementById("message");
  count++;
  div.innerHTML = message + count + " times!";
}
*/

// I am telling you this is not good
// I have been suffering this shit

function getElement(id) {
  return document.getElementById(id);
}

window.onload = IncrementCountenWhenCliked;
function IncrementCountenWhenCliked() {
  let counter = 0;
  let message = "You clicked me ";
  let div = getElement("message");
  let btn = getElement("clickme");
  btn.onclick = () => {
    counter += 1;
    div.innerText = `${message} ${counter} times.`;
  };
}

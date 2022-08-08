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
// I am a devil of my word!
// this is really annoying you knwo I really want to quit
// this is really annoying you knwo I really want to quit polymorph branch
// this is really annoying you knwo I really want to quit
// this is really annoying you knwo I really want to quit

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


// trying to edit this file



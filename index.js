const display = document.getElementById("data");
let buttons = Array.from(document.getElementsByClassName("btn"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "c":
        display.innerText = "";
        break;
      case "=":
        display.innerText = eval(display.innerText);
        break;
      default:
        display.innerText += e.target.innerText;
        break;
    }
  });
});

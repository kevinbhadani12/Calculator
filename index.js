console.log("calculator");

let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = "";
for (let items of buttons) {
  items.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;
    console.log(buttonText);

    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else if (buttonText == "←") {
      // here html ma left-arrow mate code lkho chhe ane javascript ma arrow kmk screen ma arrow print thay mate jya arrow aave tya substr no use kri back spack karavanu
      screenValue = screen.value.substr(0, screen.value.length - 1);
      screen.value = screenValue;
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}

// let screen = document.getElementById("screen");
// let buttons = document.querySelectorAll("button");
// let screenValue = "";

// for (item of buttons) {
//   item.addEventListener("click", (e) => {
//     buttonText = e.target.innerText;
//     console.log(buttonText);

//     if (buttonText == "X") {
//       buttonText = "*";
//       screenValue += buttonText;
//       screen.value = screenValue;
//     } else if (buttonText == "C") {
//       screenValue = "";
//       screen.value = screenValue;
//     } else if (buttonText == "←") {
//       screenValue = screen.value.substr(0, screen.value.length - 1);
//       screen.value = screenValue;
//     } else if (buttonText == "=") {
//       screen.value = eval(screenValue);
//     } else {
//       screenValue += buttonText;
//       screen.value = screenValue;
//     }
//   });
// }

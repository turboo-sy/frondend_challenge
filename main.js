const form = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const input = document.querySelectorAll("main form div input");
const alertInfo = document.querySelectorAll("main form div img");
const alertMsg = document.querySelectorAll("main form div span.alert");

let dataValid = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  firstName.value == "" ? alertDisplayBlock(0) : alertDisplayNone(0);
  lastName.value == "" ? alertDisplayBlock(1) : alertDisplayNone(1);
  email.value == "" ? alertDisplayBlock(2) : checkEmail();
  password.value == "" ? alertDisplayBlock(3) : alertDisplayNone(3);

  alertSuccess();
});

function alertDisplayBlock(i) {
  alertMsg[i].classList.add("block");
  alertInfo[i].classList.add("block");
  input[i].classList.add("errInput");
}

function alertDisplayNone(i) {
  pushDataValid(i);
  alertMsg[i].classList.remove("block");
  alertInfo[i].classList.remove("block");
  input[i].classList.remove("errInput");
}

function checkEmail() {
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!email.value.match(pattern)) {
    alertMsg[2].innerHTML = "Looks like this is not an email";
  } else {
    alertMsg[2].innerHTML = "Email cannot be empty";
    alertDisplayNone(2);
  }
}

function pushDataValid(i) {
  dataValid.push(i);
  dataValid = [...new Set(dataValid)];
}

function alertSuccess() {
  dataValid.length > 3 ? alert("Success claim free trial") : "";
}

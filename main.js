let firstName = document.querySelector("input[name = firstName ]");
let lastName = document.querySelector("input[name = lastName ]");
let emailAddress = document.querySelector("input[name = userEmail ]");
let password = document.querySelector("input[name = password ]");
let submit = document.getElementById("submit");
let alert1 = document.querySelector( ".alert1" );
let alert2 = document.querySelector( ".alert2" );
let alert3  = document.querySelector( ".alert3" );
let alert4  = document.querySelector(".alert4");

document.forms = addEventListener ("submit" , (e) => {
  let passwordReg = /([A-Z]){1}@\d+/g;   
  let emailReg = /\w+@\w+.(com|net|org)/gi;

  if (emailReg.test(emailAddress.value) === false) {
    e.preventDefault();
    emailAddress.style.borderColor = "hsl(0, 100%, 74%)";
    alert3.style.display = "block"
  }if(passwordReg.test(password.value) === false) {
    e.preventDefault();
    password.style.borderColor = "hsl(0, 100%, 74%)";
    alert4.style.display = "block"
  }if (firstName.value === "" || lastName.value === "" ) {
    firstName.style.borderColor = "hsl(0, 100%, 74%)";
    lastName.style.borderColor = "hsl(0, 100%, 74%)";
    alert1.style.display = "block";
    alert2.style.display = "block";
  }
})


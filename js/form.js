let form = document.getElementById("js_form");
let popup = document.querySelector(".wrapper-popup");
let textPopup = document.querySelector(".popup_text");
let popupTitle  = document.querySelector(".popup_title")
let closeBtn = document.querySelector(".popup_btn");
let closeIcon = document.querySelector(".material-symbols-outlined")

const EMAIL_REGEXP =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

let xhttp = new XMLHttpRequest();

function addPopup(messTitle,messText) {
  popup.classList.remove("none");
  textPopup.textContent = messText;
  popupTitle.textContent = messTitle;
}

function closePupup(){
  popup.classList.add("none");
}

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}

xhttp.onreadystatechange = function () {
  if (xhttp.readyState === 4 && xhttp.status === 200) {
    let messTitle = "SUCCESS!"
    let messText = "You have successfully subscribed to the email newsletter";
    addPopup(messTitle,messText);
  } else {
    let messText = "oops";
    let messTitle = "ERROR!"
    addPopup(messTitle,messText);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = form.email.value;
  if (email === "") {
    let messTitle = "ERROR!"
    let messText = "blank field";
    addPopup(messTitle,messText);
    return;
  }

  if (isEmailValid(email)) {
    xhttp.open("GET", `/?mail='${email}'`, true);
    xhttp.send();
    return;
  } else {
    let messTitle = "ERROR!"
    let messText = "Incorrect e-mail address entered";
    addPopup(messTitle,messText);
  }
});



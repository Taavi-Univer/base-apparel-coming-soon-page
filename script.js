const submitBtn = document.getElementById("button");
let inputField = document.getElementById("input-field");
let errorMessage = document.getElementById("error-msg");
let inputImg = document.getElementById("input-img");

function handleClick() {
  let emailText = /([a-zA-Z0-9_\.\-])+\@([a-zA-Z0-9]+\.)([a-zA-Z0-9])+/g;

  inputField.value === "" || !inputField.value.match(emailText)
    ? noEmail()
    : therIsEmail();
}

function noEmail() {
  errorMessage.style.display = "block";
  inputImg.style.display = "block";
  inputField.classList.add("inputError");
}

function therIsEmail(el) {
  errorMessage.style.display = "none";
  inputImg.style.display = "none";
  inputField.classList.remove("inputError");
  inputField.value = "";
}

submitBtn.addEventListener("click", handleClick);

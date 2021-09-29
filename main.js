// FORM VALIDATION
const inputField = document.querySelector("input");
const submitBtn = document.querySelector(".btn");
const errorImage = document.querySelector(".error-image");
const errorMessage = document.querySelector(".error-message");

submitBtn.addEventListener("click", (e) => {
  if (inputField.value === "") {
    inputField.classList.add("form-error");
    errorImage.style.display = "flex";
    errorMessage.textContent = "Please enter your email";
    errorMessage.style.display = "block";
    e.preventDefault();
  } else if (inputField.value != "") {
    if (
      inputField.value.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      return true;
    } else {
      inputField.classList.add("form-error");
      errorImage.style.display = "flex";
      errorMessage.textContent = "Please enter a valid email address";
      errorMessage.style.display = "block";
      e.preventDefault();
    }
  }
});

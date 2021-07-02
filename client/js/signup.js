const signupError = document.querySelector(".sign-up-error")
const signupEmailInput = document.querySelector("form.signup-form input[name='email']")

const invalidSignupEmail = "That email is already in use"


if (signupError.textContent === invalidSignupEmail){
    signupEmailInput.classList.toggle('error')
}
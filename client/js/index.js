const loginError = document.querySelector(".login-error")
const signupError = document.querySelector(".sign-up-error")
const loginEmailInput = document.querySelector("form.login-form input[name='email']")
const signupEmailInput = document.querySelector("form.signup-form input[name='email']")
const loginPasswordInput = document.querySelector("form.login-form input[name='password']")
// const signupPasswordInput = document.querySelector("form.signup-form input[name='email']")

const invalidLoginEmail = "No user exists with that email"
const invalidSignupEmail = "That email is already in use"
const invalidLoginPassword = "Password is incorrect"



if (loginError.textContent === invalidLoginEmail){
    loginEmailInput.classList.toggle('error')
} else if (loginError.textContent === invalidLoginPassword){
    loginPasswordInput.classList.toggle('error')
}

if (signupError.textContent === invalidSignupEmail){
    signupEmailInput.classList.toggle('error')
}

console.log(signupEmailInput);
console.log(loginError);

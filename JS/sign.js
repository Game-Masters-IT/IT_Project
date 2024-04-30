// swaping between sign in and sign up 
// const wrapper = document.querySelector('.wrapper');
// const loginLink = document.querySelector('.login-link');
// const registerLink = document.querySelector('.register-link');

// registerLink.addEventListener('click', ()=> {
//     wrapper.classList.add('sign-active');
// });
// loginLink.addEventListener('click', ()=> {
//     wrapper.classList.remove('sign-active');
// });

// function checkInput() {
//     const inputFields = document.querySelectorAll('.inputField');
  
//     inputFields.forEach(inputField => {
//       const label = inputField.nextElementSibling; // Assuming the label is immediately before the input field
  
//       if (inputField.value !== '') {
//         label.classList.add('input-filled');
//       } else {
//         label.classList.remove('input-filled');
//       }
//     });
//   }
  
  
// validation 

// function validate(){
//     var username = document.getElementById("uname");
//     var email_login = document.elementFromPoint("email-login");
//     var email_signup = document.elementFromPoint("email-sign-up");
//     var pass_Login = document.getElementById("pass-login");
//     var pass_signup = document.getElementById("pass-sign-up");
    
//     if( email_login.value == "" || pass_Login.value == ""){
//         console.log("")
//     }
// }


const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click' , ()=> {
  container.classList.add("active");
});

loginBtn.addEventListener('click', ()=> {
  container.classList.remove("active");
})

const sign_email =  document.querySelector('.sign-in-email');
const sign_pass = document.querySelector('.sign-in-pass');
const sign_email_error = document.querySelector('.error-sign-email');
const sign_pass_error = document.querySelector('.error-sign-pass');

sign_email.addEventListener('input', () => {
  if(sign_email.value == '' || sign_email.value.includes('@')){
    sign_email_error.innerHTML = "";
    if(sign_email.value.slice(sign_email.value.indexOf('@')+1) == ""){
      sign_email_error.innerHTML = "Enter a valid Email !";
    }
  }

  else{
    sign_email_error.innerHTML = "Enter a valid Email !";
  }
});

sign_pass.addEventListener('input' , ()=> {
  if(sign_pass.value.length >= 8 || sign_pass.value == ''){
    sign_pass_error.innerHTML = "";
  }
  else {
    sign_pass_error.innerHTML = "please enter at least 8 lenght password !";
  }
});

const register_name =  document.querySelector('.register-name');
const register_email = document.querySelector('.register-email');
const register_pass = document.querySelector('.register-pass');
// const register_Btn = document.querySelector('.register-btn');


register_name.addEventListener('input' , ()=> {
  if(register_name.value.length < 5 ){
    register_name.setCustomValidity("Enter at least 5 characters !");
  }
  else {
    register_name.setCustomValidity("");
  }

});
register_email.addEventListener('input' , ()=> {
  if(register_email.value.includes('@')  && register_email.value.slice(sign_email.value.indexOf('@')+1) == ""){
    register_email.setCustomValidity("ENTER A VALID EMAIL !");
  }
  else {
    register_email.setCustomValidity("");
  }

});
register_pass.addEventListener('input' , ()=> {
  if(register_pass.value.length < 8){
    register_pass.setCustomValidity("Enter at least 8 digits !");
  }
  else {
    register_pass.setCustomValidity("");
  }

});






// Start Sign-in page
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('sign-active');
});
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('sign-active');
});
// End Sign-in page
const pswStatus = document.querySelector('#pswStatus');
const passwordInput = document.querySelector('.password-container input')
pswStatus.addEventListener('click', togglePasswordVisibility());

function togglePasswordVisibility() {
    if(passwordInput.type = 'password') {
        passwordInput.type = 'text';
    } else  {
        passwordInput.type = 'password';
    };
};
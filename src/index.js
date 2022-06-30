const pswShow = document.querySelector('span#pswShow');
const pswHide = document.querySelector('span#pswHide');
const passwordInput = document.querySelector('.password-container input')

pswShow.addEventListener('click', () => {
        passwordInput.type = 'text';
        console.log(passwordInput.type);
        pswShow.style.display = 'none';
        pswHide.style.display = 'flex';
        
});

pswHide.addEventListener('click', () => {
    passwordInput.type = 'password';
    console.log(passwordInput.type);
    pswShow.style.display = 'flex';
    pswHide.style.display = 'none';
});


// console.log(passwordInput.type)
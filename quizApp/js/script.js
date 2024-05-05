(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


const quizlink = document.querySelector('.quiz-link');
const login = document.querySelector('.login');
const welcome__f = document.querySelector('.welcome__f');
const welcome = document.querySelector('.welcome');
const cAccount = document.querySelector('.cAccount');
const cLogin = document.querySelector('.cLogin');
const registration = document.querySelector('#registration');
const formlogin = document.querySelector('#login');

quizlink.addEventListener('click', (event) => {
    event.preventDefault();
       
    login.classList.add('show');
    welcome__f.classList.add('translate');
    welcome.classList.add('translate');

});

cAccount.addEventListener('click', () => {
  registration.classList.remove('d-none');
  formlogin.classList.add('d-none');
});

cLogin.addEventListener('click', () => {
  formlogin.classList.remove('d-none');
  registration.classList.add('d-none');
});
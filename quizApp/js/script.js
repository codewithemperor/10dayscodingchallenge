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

$(function() {
  $(".quiz-link").click(function(event) {
    event.preventDefault();
    
    $(".login").animate({ left: '-200' }, 300, function() {
      $(this).addClass("show");
    });
    
    $(".welcome__f, .welcome").addClass("translate");
  });
});




$(function() {
  $(".cAccount").click(function() {
    $("#login").hide("slide", { direction: "left" }, 1000, function() {
      callback();
    });
    return false;
  });

  function callback() {
    setTimeout(function() {
      $("#registration").removeClass("d-none").show("slide", { direction: "right" }, 200);
    }, 500);
  }
});

$(function() {
  $(".cLogin").click(function() {
    $("#registration").hide("slide", { direction: "right" }, 1000, function() {
      callback();
    });
    return false;
  });

  function callback() {
    setTimeout(function() {
      $("#login").removeClass("d-none").show("slide", { direction: "left" }, 200);
    }, 500);
  }
});


// cAccount.addEventListener('click', () => {
//   registration.classList.remove('d-none');
//   formlogin.classList.add('d-none');
// });

// cLogin.addEventListener('click', () => {
//   formlogin.classList.remove('d-none');
//   registration.classList.add('d-none');
// });
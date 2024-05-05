function setMinDateTime() {
    const now = new Date().toISOString().slice(0, 16);
    document.getElementById("setTimerD").min = now; 
  }
  

  window.addEventListener("load", setMinDateTime);
  
const form = document.querySelector(".form");


const day = document.querySelector(".day>.value")
const hour = document.querySelector(".hour>.value")
const minutes = document.querySelector(".minutes>.value")
const seconds = document.querySelector(".seconds>.value")


form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (seconds.innerHTML > 0 || seconds.innerHTML === 0 || seconds.innerHTML === "0"){
        Swal.fire({
            title: 'Error!',
            text: 'Their is a countdown going on',
            icon: 'error',
            confirmButtonText: 'OK'
          });
    }

    else {
        
        const newT = form.setTimerD.value;
        const newTimer = new Date(newT).getTime();
      
        function updateTimer() {
          const now = new Date().getTime();
          const distance = newTimer - now;
      
          if (distance <= 0) {
            // If distance is negative or zero, stop the countdown and display a message
            clearInterval(timerInterval);
            day.innerHTML = '00';
            hour.innerHTML = '00';
            minutes.innerHTML = '00';
            seconds.innerHTML = '00';
            
            Swal.fire({
                title: 'Countdown Completed',
                text: 'Success!',
                icon: 'success',
                confirmButtonText: 'OK'
              });
    
            return;
          }
      
          const d = Math.floor(distance / (1000 * 60 * 60 * 24));
          const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const s = Math.floor((distance % (1000 * 60)) / 1000);
      
          day.innerHTML = d;
          hour.innerHTML = h;
          minutes.innerHTML = m;
          seconds.innerHTML = s;
        }
      
        updateTimer();
      
        // Update every second
        const timerInterval = setInterval(updateTimer, 1000);

    }
    
  });
  
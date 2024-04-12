document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove 'active' class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Add 'active' class to the clicked button
        this.classList.add('active');
      });
    });
})

let focusbtn = document.getElementById("focus");
let buttons = document.querySelectorAll(".btn");
let LongBreakbutton = document.getElementById("long-break");
let ShortBreakbutton = document.getElementById("short-break");
let startbutton = document.getElementById("btn-start");
let resetbutton = document.getElementById("btn-reset");
let pausebutton = document.getElementById("btn-pause");
let time = document.getElementById("time");
let set;
let count = 59;
let paused = true;
let mincount = 24;
time.textContent = `${mincount + 1}:00`;

const appenZero = (value) => {
  value = value < 10 ? `0${value}` : value;
  return value
}



resetbutton.addEventListener(
  "click",
  (resetTime = () => {
    pauseTimer();
    count = 59;
    mincount = 24;
    time.textContent = `${mincount + 1}:00`;
  })
);


const removeFocus = () => {
  buttons.forEach((btn) =>{
    btn.classList.remove("btn-focus");
  }
  
  )
}
focusbtn.addEventListener("click",() =>{
  removeFocus()
  focusbtn.classList.add("btn-focus")
  pauseTimer()
  mincount = 24;
  count = 59;
  time.textContent =  `${mincount + 1}:00`
})


ShortBreakbutton.addEventListener("click", ()=>{
  active ="short";
  removeFocus();
  ShortBreakbutton.classList.add("btn-focus");
  pauseTimer();
  mincount = 4;
  count = 59;
  time.textContent = `${mincount + 1}:00`

})


LongBreakbutton.addEventListener("click", ()=>{
  active ="long";
  removeFocus();
 LongBreakbutton.classList.add("btn-focus");
  pauseTimer();
  mincount = 14;
  count = 59;
  time.textContent = `${mincount + 1}:00`

})

pausebutton.addEventListener(
  "click",
  (pauseTimer =() => {
    paused = true;
    clearInterval(set);
    startbutton.classList.remove("hide")
    pausebutton.classList.remove("show");
    resetbutton.classList.remove("show");

  })
)


startbutton.addEventListener("click", () => {
  resetbutton.classList.add("show"); // Corrected line
  pausebutton.classList.add("show");
  startbutton.classList.add("hide");
  startbutton.classList.remove("show");
  if (paused) {
    paused = false;
    time.textContent = `${appenZero(mincount)}:${appenZero(count)}`;
    set = setInterval(() => { // Added missing interval argument
      count--;
      if (count < 0) {
        if (mincount > 0) {
          mincount--;
          count = 59;
        } else {
          clearInterval(set);
          paused = true;
          return;
        }
      }
      time.textContent = `${appenZero(mincount)}:${appenZero(count)}`;
    }, 1000); // Interval set to 1000 milliseconds (1 second)
  }
});


// document.getElementById("toggle").addEventListener("click", function(){
//   document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
// });

document.getElementById("toggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");
});
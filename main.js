const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");
var buttonCheckIn = document.getElementById("btnCheckIn");
buttonCheckIn.onclick = fnCheckIn;

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionX = offset*(-0.3)-100 + "px";
})


window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=3100;
    parallax1.style.backgroundPositionY = offset*(0.1) + "px";
})

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=4800;
    parallax2.style.backgroundPositionY = offset*(-0.1) + "px";
})

function myFunction() {
    document.getElementById("check").checked = false;
  }


  
function reveal() {
var reveals = document.querySelectorAll(".reveal");
  
for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
  
window.addEventListener("scroll", reveal);



const countDownClock = (number = 100, format = 'seconds') => {
  
  const d = document;
  const daysElement = d.querySelector('.days');
  const hoursElement = d.querySelector('.hours');
  const minutesElement = d.querySelector('.minutes');
  const secondsElement = d.querySelector('.seconds');
  let countdown;
  convertFormat(format);
  
  
  function convertFormat(format) {
    switch(format) {
      case 'seconds':
        return timer(number);
      case 'minutes':
        return timer(number * 60);
        case 'hours':
        return timer(number * 60 * 60);
      case 'days':
        return timer(number * 60 * 60 * 24);             
    }
  }

  function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if(secondsLeft <= 0) {
        clearInterval(countdown);
        return;
      };

      displayTimeLeft(secondsLeft);

    },1000);
  }

  function displayTimeLeft(seconds) {
    daysElement.textContent = Math.floor(seconds / 86400);
    hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
    minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
    secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
  }
}


/*
  start countdown
  enter number and format
  days, hours, minutes or seconds
*/
// To set two dates to two variables
var date1 = new Date();
var date2 = new Date("Sat, 20 Apr 2024 18:00:00 GMT");
  
// To calculate the time difference of two dates
var Difference_In_Time = date2.getTime() - date1.getTime();
  
// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
countDownClock(Difference_In_Days, 'days');



/************************* GIFTING ******************************/
function goToGifting() {
  window.location.href = "gifting.html";
}

var divGifting = document.getElementById("giftingSection");
var displayGifting = 1;

function showGifting()
{
  if (displayGifting == 1)
  {
    divGifting.style.display = 'block';
    displayGifting = 0;
  }
  else
  {
    divGifting.style.display = 'none';
    displayGifting = 1;
  }
}


/************************* CHECKIN ******************************/
function goToCheckin() {
  window.location.href = "checkin.html";
}

function fnCheckIn()
{
  alert('Button clicked');
}


var divCheckin = document.getElementById("checkin");
var displayCheckin = 1;

function showCheckin()
{
  if (displayCheckin == 1)
  {
    window.location.href = "#checkin";
    divCheckin.style.display = 'block';
    displayCheckin = 0;
  }
  else
  {
    divCheckin.style.display = 'none';
    displayCheckin = 1;
  }
}


/************************* INDEX ******************************/
function goToIndex() {
  window.location.href = "index.html";
}
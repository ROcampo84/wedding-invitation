const numbers = /^[0-9]+$/;
const letters = /^[a-zA-Z]+$/ 

const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");
const buttonCheckIn = document.getElementById("btnCheckIn");
buttonCheckIn.onclick = fnCheckIn;

var vGuestName = "";
var vGuestIndex = 0;
const guestName = document.getElementById("checkName");
const guestPhone = document.getElementById("checkPhone");
const guestsArrObj = [];

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
  //Validate name input.
  if (!fnNameValidate()) return;
  
  //Validate phone input.
  if (!fnPhoneValidate()) return;
  
  //Validate guest.
  if (!fnGuestValidate()) return; 

  alert("Gracias " + vGuestName.toUpperCase() + " por confirmar tu presencia!");
  //Clean fields.
  guestPhone.value = "";
  guestName.value = "";
  //Hide Checkin section.
  showCheckin();
}

function fnGuestValidate()
{
  //Load the guests' List.
  readCSV();
  
  //console.log(guestPhone.value);
  for (var i = 1; i < guestsArrObj.length; i++)
  //for (var i = 1; i < 2; i++)
  {
    //console.log(vPhoneNum);
    if (compare(guestPhone.value, guestsArrObj[i][1])) 
    {
      vGuestName = guestsArrObj[i][0];
      vGuestIndex = i;
      return true;
    }
  }

  alert("El número de teléfono ingresado no corresponde a ningún invitado.");
  return false;
}

function fnPhoneValidate()
{
  if (!guestPhone.value.match(/^\(?(\d{4})\)?[- ]?(\d{3})[- ]?(\d{3})$/))
  {
    guestPhone.value = "";
    alert("Teléfono no válido. Ejemplo: (09XX)-123-456 ó 09XX123456");
    return false;
  }
  return true;
}

function fnNameValidate()
{
  if (!guestName.value.split(" ").join("").match(letters))
  {
    guestName.value = "";
    alert("Nombre no válido");
    return false;
  }
  return true;
}

function compare(string1, string2)
{
  if (string1.length != string2.length) return false;

  for (var i = 0; i < string1.length; i++)
  {
    //console.log("Comparison: " + string1.charAt(i) + " and " + string2.charAt(i));
    if (string1.charAt(i) != string2.charAt(i)) return false;
  }

  return true;
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

/************************* GUESTS ******************************/
function readCSV() {
  var guestsCSV = 'Invitado,Contacto,Confirma\nrodrigo OCAMPO,0985209533,no\nLiz Maria Victoria Lezcano Aranda,0992244507,no\nJuan Carlos Lezcano,0991542354,no\nAngelica Figueredo,0981503009,no\nJuan Diego Lezcano0994871409,no\nMonserrat Lezcano,0,no\nBetharram Ruiz,0,no\nAndrea Serafini,0,no\nDahiana Oviedo,0,no\nMicela Rodríguez,0,no\nCecilia Florentín,0,no\nTeresa Saldívar,0,no\nMelina Méndez,0,no\nElizabeth Samaniego,0,no\nMónica Fariña,0,no\nBelén Sostoa,0,no\nLucas Brítez,0,no\nNorma Alonso,0991740795,no\nClaudio Ocampo,0985262276,no\nEduardo Ocampo,0983988369,no\nMauricio Ocampo,0971793919,no\nSofia Ocampo,0,no\nEnzo Mereles,0983891464,no\nChristian Portillo,0983476156,no\nVictor Carballo,0994274413,no\nRafael Carballo,0984795361,no\nHugo Rodriguez,0971890008,no\nPedro Silva,0985421360,no\nCristhian Caballero,0971163939,no\nCesar FUCHU Gonzalez,0971666666,no\nHector Ucedo,0981280666,no\nCarolina Bobadilla,0982765107,no';
  //var guestsCSV = fetch("./files/guestsList.csv").then(res => { return res.text});
  
  // fs.readFile('./files/guestsList.csv', 'utf8', (err, data) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log(data);
  // });

  // console.log(guestsCSV);
   var lines = guestsCSV.split('\n');
   var headers = lines[0].split(',');

  for (var i = 1; i < lines.length; i++)
  {
    var rowData = lines[i].split(',');
    guestsArrObj[i] = {};

    for (var j = 0; j < rowData.length; j++)
    {
      //guestsArrObj[i][headers[j]] = rowData[j];
      guestsArrObj[i][j] = rowData[j];
    }
  }
  //console.log(guestsArrObj);
  //console.table(guestsArrObj);
}


function readCSV2() {
  const csvData=[];
  const uploadsuccess=document.getElementById("uploadsuccess").
      addEventListener("click", () => {
          Papa.parse(document.getElementById('UploadFile').files[0], {
              download: true,
              header: true,
              skipEmptyLines: true,
              complete: function (answer) {
                  console.log("hi");
                  for (i=0; i<answer.data.length; i++) {
                      csvData.push(answer.data[i].APFD);
                  }
                  console.log(csvData);
              }
          });
      });

}
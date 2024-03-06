const numbers = /^[0-9]+$/;
const letters = /^[a-zA-Z]+$/ 

const parallax = document.getElementById("home-img-lg");
//const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");
const buttonCheckIn = document.getElementById("btnCheckIn");
const buttonSendMsg1 = document.getElementById("btnSendMsg1");
const buttonSendMsg2 = document.getElementById("btnSendMsg2");
buttonCheckIn.onclick = fnCheckIn;
buttonSendMsg1.onclick = fnSendMsg1;
buttonSendMsg2.onclick = fnSendMsg2;

var vGuestName = "";
var vGuestPhone = "";
var vGuestTable = "";
var vGuestQuantity = "";
var vGuestIndex = 0;
//const guestName = document.getElementById("checkName");
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
    //parallax1.style.backgroundPositionY = offset*(0.1) + "px";
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
  //Validate phone input.
  if (!fnPhoneValidate()) return;
  
  //Validate guest.
  if (!fnGuestValidate()) return; 

  //alert("Hola " + vGuestName.toUpperCase() + "!!!");
  
  //Show Guest section.
  showGuestSection();

  //Clean fields.
  guestPhone.value = "";
  
  //Hide Checkin section.
  showCheckin();
}

function fnGuestValidate()
{
  //Load the guests' List.
  readCSV();
  //readCSV4();
  
  //console.log(guestPhone.value);
  for (var i = 1; i < guestsArrObj.length; i++)
  //for (var i = 1; i < 2; i++)
  {
    //console.log(vPhoneNum);
    if (compare(guestPhone.value, guestsArrObj[i][1])) 
    {
      vGuestName = guestsArrObj[i][0];
      vGuestPhone = guestsArrObj[i][1];
      vGuestQuantity = guestsArrObj[i][2];
      vGuestTable = guestsArrObj[i][3];
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


/************************* GUEST ******************************/
var divGuest = document.getElementById("guestSection");
var txtGuestMsgName = document.getElementById("guestMsgName");
var txtGuestMsgTable = document.getElementById("guestMsgTable");
var txtGuestMsgQuan = document.getElementById("guestMsgQuantity");
var displayGuest = 1;

function showGuestSection()
{
  if (displayGuest == 1)
  {
    window.location.href = "#guestSection";
    divGuest.style.display = 'block';
    txtGuestMsgName.textContent = "Hola " + vGuestName.toUpperCase() + "!!!";
    txtGuestMsgTable.textContent = "Te toca la mesa " + vGuestTable + ".";
    txtGuestMsgQuan.textContent = "Cantidad de acompañantes: " + vGuestQuantity + ".";
    displayGuest = 0;
  }
  else
  {
    divGuest.style.display = 'none';
    displayGuest = 1;
  }
}

function fnSendMsg1()
{
  location = "https://api.whatsapp.com/send?phone=+595992244507&text=Hola!%0AClaro%20que%20voy%20a%20la%20boda.%0AAdemas%2C%20te%20llevo%20un%20super%20regalo.";
  //Hide Guest section.
  showGuestSection();
}

function fnSendMsg2()
{
  location = "https://api.whatsapp.com/send?phone=+595985209533&text=Hola!%0AClaro%20que%20voy%20a%20la%20boda.%0AAdemas%2C%20te%20llevo%20un%20super%20regalo.";
  //Hide Guest section.
  showGuestSection();
}

/************************* INDEX ******************************/
function goToIndex() {
  window.location.href = "index.html";
}

/************************* GUESTS ******************************/
function readCSV() {
  var guestsCSV = 'Invitado,Telefono,Cantidad,Mesa,Confirma\nJuan Carlos Lezcano,0991542354,3,A,NO\nAngelica Figueredo,0981503009,3,A,NO\nJuan Diego Lezcano,0994871409,A,NO\nMonserrat Lezcano,0,3,A,NO\nBetharram Ruiz,0,1,B,NO\nAndrea Serafini,0,1,B,NO\nDahiana Oviedo,0,1,B,NO\nBetharram Ruiz,0,1,B,NO\nAndrea Serafini,0,1,B,NO\nDahiana Oviedo,0,1,B,NO\nMicela Rodríguez,0,2,C,NO\nCecilia Florentín,0,2,C,NO\nTeresa Saldívar,0,1,D,NO\nMelina Méndez,0,1,D,NO\nElizabeth Samaniego,0,1,D,NO\nMónica Fariña,0,1,D,NO\nBelén Sostoa,0,1,D,NO\nLucas Brítez,0,2,C,NO\nNorma Alonso,0991740795,1,E,NO\nClaudio Ocampo,0985262276,3,E,NO\nEduardo Ocampo,0983988369,5,E,NO\nEnzo Mereles,0983891464,2,F,NO\nChristian Portillo,0983476156,1,F,NO\nVictor Carballo,0994274413,1,F,NO\nRafael Carballo,0984795361,1,F,NO\nHugo Rodriguez,0971890008,2,G,NO\nPedro Silva,0985421360,2,G,NO\nChristian Caballero,0971163939,1,G,NO\nCesar Gonzalez Fuchu,0971666666,1,H,NO\nHector Ucedo,0981280666,2,H,NO\nCarolina Bobadilla,0982765107,1,H,NO\nLiz Lezcano,0992244507,2,X,NO\nRodrigo Ocampo,0985209533,2,X,NO';
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



function loadData()
{
  $(document).ready(function() {
    $.ajax({
      type: "GET",
      url: "./files/guestsList.csv",
      dataType: "text",
      success: function(data) {
        readCSV3(data); 
      }
    });
  });
}

function readCSV3(csvText) {
  
  var lines = csvText.split('\n');
  var headers = lines[0].split(',');

  for (var i = 1; i < lines.length; i++)
  {
    var rowData = lines[i].split(',');
    guestsArrObj[i] = {};

    for (var j = 0; j < rowData.length; j++)
    {
      guestsArrObj[i][j] = rowData[j];
    }
  }
  console.table(guestsArrObj);
}

function readCSV4() {
  
  const csvFile = "files/guestsList.csv";

  const res = fetch(csvFile, {
    method: 'get',
    headers: {
        'content-type': 'text/csv;charset=UTF-8'
    }
  });

  var lines = csvFile.textContent.split('\n');
  var headers = lines[0].split(',');

  for (var i = 1; i < lines.length; i++)
  {
    var rowData = lines[i].split(',');
    guestsArrObj[i] = {};

    for (var j = 0; j < rowData.length; j++)
    {
      guestsArrObj[i][j] = rowData[j];
    }
  }
  console.table(guestsArrObj);
}

/************************* USEFULL ******************************/

var userInputEl = document.getElementById('user-input');
var unitsInput = document.getElementById('units');
var btnEl = document.getElementById('search-btn');
var searchList = document.getElementById('saved');
var mainCard = document.getElementById('main-card');
var mainList = document.getElementById('title');
var date2 = document.getElementById('day-2');
var date3 = document.getElementById('day-3');
var date4 = document.getElementById('day-4');
var date5 = document.getElementById('day-5');
var date6 = document.getElementById('day-6');
var forecast = document.getElementById('forecast');
forecast.style.visibility = "hidden";
var searchAgainFormEl = document.getElementById('searches')
var searchAgain;
var cityName;

var ApiKey = '2435987fc0c566bd046bac1c4eeabd0f';

var savedCityArr = JSON.parse(localStorage.getItem('savedCity')) || [];

function submitForm (event){
    event.preventDefault();

    cityName = userInputEl.value;
    var whichUnit = unitsInput.options[unitsInput.selectedIndex].value;
    console.log(whichUnit);
    cleanUp();
    saveSearch();
    displaySearches();
    var URL = 'https://api.openweathermap.org/geo/1.0/direct?q='+ cityName +'&limit=1&appid='+ApiKey;
    fetch(URL)
    .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log("city info......",data);
            var lat = data[0].lat
            var lon = data[0].lon
            getWeather (lat,lon,whichUnit);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
};

function getWeather (x,y,z){
  var URL = 'https://api.openweathermap.org/data/2.5/forecast?lat='+x+'&lon='+y+'&appid='+ApiKey+'&units='+z;
 
  fetch(URL)
  .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log("city weather data......",data);


//MAIN CARD
          var today = document.createElement('h2')
          today.textContent = userInputEl.value + " " + data.list[0].dt_txt.toString();
          mainCard.append(today)

          var icon = data.list[0].weather[0].icon
          var iconURL = 'https://openweathermap.org/img/wn/'+icon+'@2x.png';
          var img = document.createElement('img');
          img.setAttribute('src',iconURL);
          mainCard.append(img);

          var temp1 ="Temp: "+ data.list[0].main.temp+" ";
          mainCard.append(temp1)

          var humidity ="Humidity: "+ data.list[0].main.humidity+" ";
          mainCard.append(humidity);

          var wind ="Wind Speed: "+ data.list[0].wind.speed+" ";
          mainCard.append(wind);
//day2
          var day2 = document.createElement('li')
          day2.textContent = data.list[5].dt_txt.toString();
          date2.append(day2);

          var icon2 = data.list[5].weather[0].icon
          var icon2URL = 'https://openweathermap.org/img/wn/'+icon2+'@2x.png'
          var img2 = document.createElement('img');
          img2.setAttribute('src',icon2URL)
          date2.append(img2);

          var temp2 = document.createElement('li');
          temp2.textContent ="Temp: "+data.list[5].main.temp;
          date2.append(temp2);

          var humidity2 = document.createElement('li');
          humidity2.textContent ="Humidity: "+data.list[5].main.humidity;
          date2.append(humidity2);

          var wind2 = document.createElement('li');
          wind2.textContent ="Wind Speed: "+data.list[5].wind.speed;
          date2.append(wind2);
//day3
          var day3 = document.createElement('li')
          day3.textContent = data.list[13].dt_txt.toString();
          date3.append(day3);

          var icon3 = data.list[13].weather[0].icon
          var icon3URL = 'https://openweathermap.org/img/wn/'+icon3+'@2x.png'
          var img3 = document.createElement('img');
          img3.setAttribute('src',icon3URL)
          date3.append(img3);

          var temp3 = document.createElement('li');
          temp3.textContent ="Temp: "+data.list[13].main.temp;
          date3.append(temp3);

          var humidity3 = document.createElement('li');
          humidity3.textContent ="Humidity: "+data.list[13].main.humidity;
          date3.append(humidity3);

          var wind3 = document.createElement('li');
          wind3.textContent ="Wind Speed: "+data.list[13].wind.speed;
          date3.append(wind3);
//day4
          var day4 = document.createElement('li')
          day4.textContent = data.list[21].dt_txt.toString();
          date4.append(day4);

          var icon4 = data.list[21].weather[0].icon
          var icon4URL = 'https://openweathermap.org/img/wn/'+icon4+'@2x.png'
          var img4 = document.createElement('img');
          img4.setAttribute('src',icon4URL)
          date4.append(img4);

          var temp4 = document.createElement('li');
          temp4.textContent ="Temp: "+data.list[21].main.temp;
          date4.append(temp4);

          var humidity4 = document.createElement('li');
          humidity4.textContent ="Humidity: "+data.list[21].main.humidity;
          date4.append(humidity4);

          var wind4 = document.createElement('li');
          wind4.textContent ="Wind Speed: "+data.list[21].wind.speed;
          date4.append(wind4);
//day5
          var day5 = document.createElement('li')
          day5.textContent = data.list[29].dt_txt.toString();
          date5.append(day5);

          var icon5 = data.list[29].weather[0].icon
          var icon5URL = 'https://openweathermap.org/img/wn/'+icon5+'@2x.png'
          var img5 = document.createElement('img');
          img5.setAttribute('src',icon5URL)
          date5.append(img5);

          var temp5 = document.createElement('li');
          temp5.textContent ="Temp: "+data.list[29].main.temp;
          date5.append(temp5);

          var humidity5 = document.createElement('li');
          humidity5.textContent ="Humidity: "+data.list[29].main.humidity;
          date5.append(humidity5);

          var wind5 = document.createElement('li');
          wind5.textContent ="Wind Speed: "+data.list[29].wind.speed;
          date5.append(wind5);
//day6
           var day6 = document.createElement('li')
          day6.textContent = data.list[37].dt_txt.toString();
          date6.append(day6);

          var icon6 = data.list[37].weather[0].icon
          var icon6URL = 'https://openweathermap.org/img/wn/'+icon6+'@2x.png'
          var img6 = document.createElement('img');
          img6.setAttribute('src',icon6URL)
          date6.append(img6)

          var temp6 = document.createElement('li');
          temp6.textContent ="Temp: "+data.list[37].main.temp;
          date6.append(temp6);

          var humidity6 = document.createElement('li');
          humidity6.textContent ="Humidity: "+data.list[37].main.humidity;
          date6.append(humidity6);

          var wind6 = document.createElement('li');
          wind6.textContent ="Wind Speed: "+data.list[37].wind.speed;
          date6.append(wind6)
          
          forecast.style.visibility = "visible";

        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
};


function saveSearch (){
    var savedCity = userInputEl.value;
    savedCityArr = savedCityArr.filter((city) => city != savedCity);
    savedCityArr.push(savedCity);
    localStorage.setItem('savedCity',JSON.stringify(savedCityArr));
};

function cleanUp (){
  searchList.innerHTML = "";
  mainCard.innerHTML = "";
  date2.innerHTML = "";
  date3.innerHTML = "";
  date4.innerHTML = "";
  date5.innerHTML = "";
  date6.innerHTML = "";
};

function displaySearches(){
  for(var i=0; i<savedCityArr.length; i++){
    var searchAgainLi = document.createElement('li');
    searchList.append(searchAgainLi);
    searchAgain = document.createElement('button');
    searchAgain.textContent = savedCityArr[i];
    searchAgain.setAttribute('class','again');
    searchAgain.setAttribute('type','click');
    searchAgainLi.prepend(searchAgain);
  };
}

function oneMoreTime(event){
  event.preventDefault();

  console.log("another",searchAgain.textContent)

  userInputEl.value = event.target.textContent;

  console.log("another1",userInputEl);
  cityName = userInputEl.value;
    var whichUnit = unitsInput.options[unitsInput.selectedIndex].value;
    console.log(whichUnit);
    cleanUp();
    saveSearch();
    var URL = 'https://api.openweathermap.org/geo/1.0/direct?q='+ cityName +'&limit=1&appid='+ApiKey;
    fetch(URL)
    .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log("city info......",data);
            var lat = data[0].lat
            var lon = data[0].lon
            getWeather (lat,lon,whichUnit);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      displaySearches();

  
};


btnEl.addEventListener('submit',submitForm);
// searchAgainFormEl.addEventListener('submit',oneMoreTime);
searchAgainFormEl.addEventListener('click', function(event){
  event.preventDefault();
  if(event.target.localName === 'button'){
    oneMoreTime(event);
  }
});

displaySearches();
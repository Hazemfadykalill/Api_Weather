// Create a new Date object with the specified date
var date = new Date();

// Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
var dayOfWeek = date.getDay();

// Define an array of weekdays
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["January", "February", "March", "April", "Thursday", "May", "June","July", "August","September","October","November","December"];

// Get the name of the day of the week
// Elements From HTML
var secondPage=document.getElementById("ContactPage");
var home=document.getElementById("home");
var FirstPage=document.getElementById("FirstPage");
var inputFirstPage=document.getElementById("inputFirstPage");
var breadCrumb=document.getElementById("breadCrumb");
var breadcrumbActive=document.getElementById("breadcrumbActive");
var Active=document.getElementById("Active");
var contatA=document.getElementById("contatA");
var logoSecond=document.getElementById("logoSecond");
var logoFirst=document.getElementById("logoFirst");
// Navs Model
var News=document.getElementById("News");
var LiveCameras=document.getElementById("LiveCameras");
var Photos=document.getElementById("Photos");
var modelError=document.getElementById("modelError");
var errorAnchor=document.getElementById("errorAnchor");
var hhhhhhhhhh=document.getElementById("hhhhhhhhhh");
News.addEventListener("click" , function(){
  modelError.style.display="flex";
  hhhhhhhhhh.style.display="none";


});
Photos.addEventListener("click" , function(){
  modelError.style.display="flex";
  hhhhhhhhhh.style.display="none";
});
LiveCameras.addEventListener("click" , function(){
  modelError.style.display="flex";
  hhhhhhhhhh.style.display="none";
})

// search input country
var search=document.getElementById("search");
search.addEventListener("keyup", function(){
    getDataFromApi(search.value);
    
});
// find button country
var find=document.getElementById("Find");
find.addEventListener("click",  async function(){
    if(find.value==null){
     await getDataFromApi("cairo")    }
      else{
        
        getDataFromApi(find.value);
        clearInput();

    }


    
});
// Get data from api
async function getDataFromApi(country){
    var apiKey="b071c9f88fee4f10a89105548240101"
    var response=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${country}&days=3&aqi=no&alerts=n`);
    var data= await response.json();
    console.log(weekdays[date.getDay(data.forecast.forecastday[0].date)]);
    console.log(weekdays[date.getDay(data.forecast.forecastday[1].date)+1]);
    console.log(weekdays[date.getDay(data.forecast.forecastday[2].date)+2]);
    displayWeather(data);
//   country cairo =====(data.location.name).split(" ")[0]
// condition weather current time ====data.current.condition.text
// condition icon weather current time ====data.current.condition.text
// 1 day 
// 2 day 
// 3 day
    // console.log(data.forecast.forecastday[0].date);  date 1
    

// data.forecast.forecastday[0].date
}
// to display data in html
function displayWeather(data){
    document.getElementById("forecast").innerHTML=`
    <div class="col-lg-4 ">
          <div class="cardLarge  text-white" id="firstDay">
            <div class="header px-3 py-2  d-flex justify-content-between px-2" id="headerFirst">
              <h6>${weekdays[date.getDay(data.forecast.forecastday[0].date)]}</h6>
              <h6>${date.getDay(data.forecast.forecastday[0].date)}${month[date.getMonth(data.forecast.forecastday[0].date)]}</h6>
            </div>
            <div class="bodyLarge py-5 ps-3 ">
              <div class="country" id="country">
                <h6>${(data.location.name).split(" ")[0]}</h6>
              </div>
              <div class="temperature mt-3" id="temperature">
                <h1>${data.current.temp_c} <sup>0</sup>c</h1>
              </div>
              <div class="imageLarge my-2" id="imageLarge">
                <img src="https:${data.current.condition.icon}" alt="">

              </div>
              <div class="weatherState" id="weatherState">
                <h5 class="fs-6">${data.current.condition.text} </h5>
              </div>
              <div class="percentage d-flex mt-3" id="percentage">
               <span><img src="images/bodyImage/icon-umberella.png" class="me-3" alt="">20%</span>
               <span><img src="images/bodyImage/icon-wind.png" class="me-3" alt="">18km/h</span>
               <span><img src="images/bodyImage/icon-compass.png" class="me-3" alt="">East</span>

              </div>

              
            </div>
          </div>
        </div>
        <div class="col-lg-4 ">
          <div class=" text-center text-white" id="SecondDay">
            <div class="header  px-3 py-2  px-2 text-center" id="headerSecond">
              <h6>${weekdays[date.getDay(data.forecast.forecastday[1].date)+1]}</h6>
             
            </div>
            <div class="bodyMain" >
              <div class="image my-3" id="imageSecondDay">
                <img src="https:${data.forecast.forecastday[1].day.condition.icon}" alt="">
              </div>
              <h5 class="fw-bold">${data.forecast.forecastday[1].day.mintemp_c} <sup>0</sup> c</h5>
              <h6 class="">${data.forecast.forecastday[1].day.maxtemp_f} <sup>0</sup> c</h6>
              <div class="weatherState mt-3" id="weatherState">
                <h5 class="fs-6">${data.forecast.forecastday[1].day.condition.text}</h5>
              </div>

            </div>

            
          </div>
        </div>
        <div class="col-lg-4 ">
          <div class=" text-center text-white" id="ThirdDay">
            <div class="header  px-3 py-2  px-2 text-center" id="headerThird">
              <h6>${weekdays[date.getDay(data.forecast.forecastday[2].date)+2]}</h6>
             
            </div>
            <div class="bodyMain" >
              <div class="image my-3" id="imageThirdDay">
                <img src="https:${data.forecast.forecastday[2].day.condition.icon}" alt="">
              </div>
              <h5 class="fw-bold">${data.forecast.forecastday[2].day.mintemp_c} <sup>0</sup> c</h5>
              <h6 class="">${data.forecast.forecastday[2].day.maxtemp_f} <sup>0</sup> c</h6>
              <div class="weatherState mt-3" id="weatherState">
                <h5 class="fs-6">${data.forecast.forecastday[2].day.condition.text}</h5>
              </div>

            </div>

            
          </div>
        </div>
    `

}
// clear input in search input
function clearInput(){
    search.value = '';
}
// to translate contact page
contatA.addEventListener("click",displaySecondPage);

// to display page contact
function displaySecondPage(){
    secondPage.style.display="flex";
    FirstPage.style.display="none";
    logoSecond.style.display="flex";
    logoFirst.style.display="none";
    breadCrumb.style.display="block";
    inputFirstPage.style.display="none";
    home.style.backgroundImage="none";
    home.style.height=0;
    home.style.padding="0px";
    home.style.margin="0px";
    contatA.classList.add("active");
    Active.classList.remove("active");


}

Active.addEventListener("click",displayFirstPage);
// to display page that contain image

function displayFirstPage(){
    secondPage.style.display="none";
    FirstPage.style.display="block";
    inputFirstPage.style.display="block";
    breadCrumb.style.display="none";
    modelError.style.display="none";
    home.style.backgroundImage="";
    home.style.height="400px";
    logoSecond.style.display="none";
    logoFirst.style.display="flex";
    hhhhhhhhhh.style.display="block";
    Active.classList.add("active");
    contatA.classList.remove("active");


}


logoSecond.addEventListener("click",displayFirstPage);

errorAnchor.addEventListener("click",displayFirstPage);

  // Check if the browser supports Geolocation
 
    // Check if the browser supports Geolocation
    function Geolocation(){
        if ("geolocation" in navigator) {
            // Use the Geolocation API to get the current position
            navigator.geolocation.getCurrentPosition(
              function(position) {
                // Successfully retrieved the position
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
        
                // Use reverse geocoding to get country information
                var apiKey = 'e38e6d26f77b4f6b81ae94e094582e08'; // Replace with your OpenCage API key
                var apiUrl = 'https://api.opencagedata.com/geocode/v1/json?key=' + apiKey + '&q=' + latitude + '+' + longitude;
        
                fetch(apiUrl)
                  .then(response => response.json())
                  .then(data => {
                    // Extract country information from the response
                    
                    var country = data.results[0].components.country;
                    getDataFromApi(country)
                    
                    // Do something with the country information
      
                    
                    
                  })
                  .catch(error => {
      
                    console.error('Error fetching geocoding data:', error);
                  });
              },
              function(error) {
                // Handle any errors that occur while retrieving the position
                switch(error.code) {
                  case error.PERMISSION_DENIED:
                    alert("User denied the request for Geolocation.");
                    break;
                  case error.POSITION_UNAVAILABLE:
                    alert("Location information is unavailable.");
                    break;
                  case error.TIMEOUT:
                    alert("The request to get user location timed out.");
                    break;
                  case error.UNKNOWN_ERROR:
                    alert("An unknown error occurred.");
                    break;
                }
              }
            );
          } else {
            // Geolocation is not supported by the browser
            alert("Geolocation is not supported by your browser.");
          }
      

    }
    

    Geolocation();
    breadcrumbActive.addEventListener("click",displayFirstPage)
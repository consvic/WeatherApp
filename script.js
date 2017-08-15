var weatherObj;
function getWeatherJSON() {
   //document.write("cargo");
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?id=3530597&APPID=ce847673e9580213614d3d070c6b31d5",function(json) {
        //document.write(JSON.stringify(json));
        weatherObj = JSON.parse(JSON.stringify(json));
        show();
    })
    .error(function() {
        showError();
    })
}

function show() {
    showCity();
    showDescription();
    showTemp();
    showWind();
    showIcon();
    //showRain();
}

function showError() {
    //alert("no internet connection");
    $(".error").css("visibility","visible");
    $("#weather_wrapper").css("visibility","hidden");
    $("body").css("background","linear-gradient(90deg, #b80f0a 10%, #b80f0a 90%)");
    //window.location.replace("Error.html");
}

function showCity() {
    document.getElementById("city").innerHTML= weatherObj.name;
    //document.getElementsByName("location").innerHTML=weatherObj.name;
}

function showDescription() {
    document.getElementById("desc").innerHTML= weatherObj.weather[0].description;
}

function showTemp() {
    var tempC = weatherObj.main.temp - 273;
    tempC = tempC.toFixed(0);
    document.getElementById("temp").innerHTML= tempC + "&deg;";
    //document.getElementsByName("temp").innerHTML = tempC;
}

function showWind() {
    document.getElementById("windS").innerHTML = weatherObj.wind.speed + " M/S";
}

function showIcon() {
    var weatherID = weatherObj.weather[0].id;
    if(weatherID >=200 && weatherID < 300) {
        document.getElementById("conditions").innerHTML=
            "<div class='icon thunder-storm'><div class='cloud'></div><div class='lightning'><div class='bolt'></div><div class='bolt'></div></div></div>";
    }
    if(weatherID >= 300 && weatherID < 500) {
        document.getElementById("conditions").innerHTML=
            "<div class='icon sun-shower'><div class='cloud'></div><div class='sun'><div class='rays'></div></div><div class='rain'></div></div>";
    }
    if(weatherID >= 500 && weatherID < 600){
        document.getElementById("conditions").innerHTML=
            "<div class='icon rainy'><div class='cloud'></div><div class='rain'></div></div>";
    }
    if(weatherID >= 600 && weatherID < 700) {
        document.getElementById("conditions").innerHTML=
            "<div class='icon flurries'><div class='cloud'></div><div class='snow'><div class='flake'></div><div class='flake'></div></div></div>";
    }
    if(weatherID >= 700 && weatherID < 800) {
        document.getElementById("conditions").innerHTML=
            "<div class='icon cloudy'><div class='cloud'></div><div class='cloud'></div></div>";
    }
    if(weatherID == 800) {
        document.getElementById("conditions").innerHTML=
            "<div class='icon sunny'><div class='sun'><div class='rays'></div></div></div>";
    }
    if(weatherID > 800) {
        document.getElementById("conditions").innerHTML=
            "<div class='icon cloudy'><div class='cloud'></div><div class='cloud'></div></div>";
    }
}

/*function showRain() {
    var rain = weatherObj.rain.3h;
    if(rain == "") {
        rain = 0;
    }
    document.getElementById("rain").innerHTML = rain;
}*/
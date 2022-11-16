//Zachary Hunt CS 3366-001
//Project 2 - Magic Mirror

let capture;
let scheduleTable;
let notifications;
let news;
let health;
var weather;

function preload() {
  scheduleTable = loadTable('p2schedule.csv', 'csv', 'header');
  
  notifications = loadTable('p2notifications.csv', 'csv', 'header');
  
  news = loadTable('p2news.csv', 'csv', 'header');
  
  health = loadTable('p2health.csv', 'csv', 'header');
}

function setup() {
  createCanvas(900, 600);
  
  //reflection
  capture = createCapture(VIDEO);
  capture.hide();
  
  //weather data
  loadJSON("https://api.openweathermap.org/data/2.5/weather?q=lubbock&appid=075700311862756cb16840a670c41d64&units=imperial", checkWeather);

  //lights
  stroke(0);
  fill(252, 255, 180);
  rect(80, 20, 815, 520);
  filter(BLUR, 15);
}//end setup

function draw() {
  
  //reflection
  image(capture, 90, 30, 800, 500);

  //schedule
  stroke(0);
  fill(0, 0, 0, 100);
  rect(95, 35, 165, 340);
  textSize(15);
  textStyle(BOLD);
  fill(255);
  text("SCHEDULE " + month() + "/" + day() + ": ", 100, 50);
  textSize(10);
  let location = 80;
  for(let i = 0; i < scheduleTable.getRowCount(); i++) {
    for(let j = 0; j < scheduleTable.getColumnCount(); j++) {
      text(scheduleTable.getString(i,j), 100, location);
      location = location + 15;
    }
  }
  
  //weather
  stroke(0);
  fill(0, 0, 0, 100);
  rect(95, 380, 250, 140);
  textSize(15);
  textStyle(BOLD);
  fill(255);
  text("Weather for Lubbock, TX " + month() + "/" + day() + ": ", 100, 400);
  textSize(10);
  if(weather) {
    textStyle(BOLD);
    text("Current Temp is " + weather.main.temp, 100, 420);
    text("High " + weather.main.temp_max, 100, 435);
    text("Low " + weather.main.temp_min, 100, 450);
    text("Feels Like " + weather.main.feels_like, 100, 465);
    text("Humidity is " + weather.main.humidity, 100, 480);
    text("Winds up to " + weather.wind.speed + " mph", 100, 495);
  }

  //news
  stroke(0);
  fill(0, 0, 0, 100);
  rect(575, 35, 315, 120);
  fill(255);
  textStyle(BOLD);
  textSize(15);
  text("NEWS:", 655, 50);
  textSize(10);
  location = 80;
  for(let i = 0; i < news.getRowCount(); i++) {
    for(let j = 0; j < news.getColumnCount(); j++) {
      text(news.getString(i,j), 580, location);
      location = location + 15;
    }
  }
  
  
  //notifications
  stroke(0);
  fill(0, 0, 0, 100);
  rect(735, 180, 155, 140);
  textSize(15);
  textStyle(BOLD);
  fill(255);
  text("NOTIFICATIONS: ", 750, 200);
  textSize(10);
  location = 230;
  for(let i = 0; i < notifications.getRowCount(); i++) {
    for(let j = 0; j < notifications.getColumnCount(); j++) {
      text(notifications.getString(i,j), 750, location);
      location = location + 15;
    }
  }
  
  //health
  stroke(0);
  fill(0, 0, 0, 100);
  rect(690, 325, 200, 140);
  textSize(15);
  textStyle(BOLD);
  fill(255);
  text("Health: ", 750, 350);
  textSize(10);
  location = 380;
  for(let i = 0; i < health.getRowCount(); i++) {
    for(let j = 0; j < health.getColumnCount(); j++) {
      text(health.getString(i,j), 700, location);
      location = location + 15;
    }
  }
  
  //clock
  stroke(0);
  fill(0, 0, 0, 100);
  rect(450, 31, 110, 25);
  let hr = hour();
  let min = minute();
  let sec = second();
  noStroke();
  textSize(25);
  fill(255);
  let cycle = hr >= 12? "pm" : "am";
  if(min < 10) {
    min = "0" + min;
  }
  hr%= 12;
  text(hr + ':' + min + " " + cycle, 450, 50);
  
}//end draw

function checkWeather(data) {
  weather = data;
}
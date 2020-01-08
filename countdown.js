runClock();

function runClock(){
//Display time left before New years Eve

var currentYear = new Date();

var dateStr = currentYear.toDateString();
var timeStr = currentYear.toLocaleDateString();

var newYear = new Date("January 1, 2021");
var nextYear = currentYear.getFullYear()+1;
newYear.setFullYear(nextYear);

var daysLeft = (newYear - currentYear)/(1000*60*60*24);
var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = Math.floor(hrsLeft);
document.getElementById("mins").textContent = Math.floor(minsLeft);
document.getElementById("secs").textContent = Math.ceil(secsLeft);
}
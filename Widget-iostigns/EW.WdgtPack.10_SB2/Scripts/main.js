window.addEventListener("load", function() { 
   document.body.style.width='100%';
   document.body.style.height='100%';
}, false);

function updateClock() { 
var currentTime = new Date();
var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes();
var currentSeconds = currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds();
var currentDate = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
var currentMonth = currentTime.getMonth() + 1;
timeOfDay = ( currentHours < 12 ) ? "am" : "pm";

if (Clock == "24h"){
	timeOfDay = "";
	currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
	currentTimeString = currentHours + ":" + currentMinutes;
}
if (Clock == "12h"){
	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
	currentHours = ( currentHours == 0 ) ? 12 : currentHours;
	currentTimeString = currentHours + ":" + currentMinutes;
}

document.getElementById("hour").innerHTML = currentHours;
document.getElementById("minute").innerHTML = currentMinutes;
document.getElementById("ampm").innerHTML = timeOfDay;
}

function getBatt(){
	jQuery.get('file:///var/mobile/Library/Stats/BatteryStats.txt', function(appdata) {
	var myvar = appdata;
	var substr = appdata.split('\n');
	var Level = substr[0].split(': ')[1];
	var State = substr[1].split(': ')[1];
	var StateRaw = substr[2].split(':')[1];

document.getElementById("LevelDisplay").innerHTML = Level + '%';
});
}

function getRam(){
	jQuery.get('file:///var/mobile/Library/Stats/RAMStats.txt', function(appdata) {
	var myvar = appdata;
	var substr = appdata.split('\n');
	var free = substr[0].split(': ')[1];
	var Used = substr[1].split(': ')[1];
	var Total_usable = substr[2].split(': ')[1];
	var Total_physical = substr[3].split(': ')[1];

document.getElementById("RAMfree").innerHTML = "/ " + free + 'MB';
});
}

function init(){
updateClock();
getBatt();
getRam();
setInterval("updateClock();", 1000);
setInterval("getBatt()", 10000);
setInterval("getRam()", 10000);
}


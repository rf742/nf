#!/usr/bin/env node

const os = require('os');


// convert the uptime in seconds to hms format, using checktime to add leading 
// zeroes to single digit numbers
var samp = os.uptime(); // 4003 seconds is the same as
var hours = Math.floor(samp/3600);
var remaining_seconds = samp % 3600;
var min = Math.floor(remaining_seconds/60);
var sec = remaining_seconds % 60;
function checktime(i){
	if (i<10) { i = "0" + i;} return i;
}
var timestr = checktime(hours) + "H " + checktime(min)  + "M " + checktime(sec) + "S"

const freeMB =  Math.round(os.freemem()*0.000001) 
const totalMB = Math.round(os.totalmem()*0.000001) 
const usedMB = totalMB-freeMB
function display() {
	var userstring = "                 "+ os.userInfo()['username']+"@"+ os.hostname();
	console.log(userstring+"\n")
	var cats = [
		"type: " + os.type,
		"kernel: " + os.release(),
		"host: " + os.hostname(), 
		"shell: "+ os.userInfo()['shell'],
		"uptime: " + timestr,
		"mem: "+ usedMB+ " Mb  / " + totalMB+ " Mb"
	]
	console.log("                 "+cats[0]);
	console.log("     /\\        " + cats[1]);
	console.log("    /  \\         "+ cats[2]);
	console.log("    \\  /        "+ cats[3]);
	console.log("     \\/        "+ cats[4]);
	console.log("                  " + cats[5]);
	console.log("\n\n");
}

display()



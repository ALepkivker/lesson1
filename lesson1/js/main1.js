var startTime;
var checkTime;

//Initialize function
var init = function () {
	// TODO:: Do your initialization job
	console.log("init() called");

	// add eventListener for tizenhwkey
	document.addEventListener('tizenhwkey', function(e) {
		if(e.keyName == "back") {
			try {
				tizen.application.getCurrentApplication().exit();
			} catch (error) {
				console.error("getCurrentApplication(): " + error.message);
			}
		}
	});
};
// window.onload can work without <body onload="">
window.onload = init;
var flag = true;

function startTime() {
	var today = new Date();
	var h = today.getHours();

	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('divbutton1').innerHTML = "Current time: " + h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 250);
}

function showHide(){
	if (flag === true){
		document.getElementById('img').style.display = 'none';
		flag = false;
	}else{
		document.getElementById('img').style.display = 'block';
		flag = true;
	}
}
function showRes(){
	var resStr = document.getElementById('res');
	if (resStr.innerHTML === "Resolution: "){
		resStr.innerHTML ="Resolution: " + window.screen.availHeight + " x " + window.screen.availWidth;		
	}else{
		resStr.innerHTML ="Resolution: " ;
	}
	
}
function checkTime(i) {
	if (i < 10) {
		i="0" + i;
	}
	return i;
}

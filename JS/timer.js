class Timer{

	constructor{
		var startTime = 0
		var start = 0
		var end = 0
		var diff = 0
		var timerID = 0
		window.onload = chronoStart;
	}

	chrono(){
		end = new Date()
		diff = end - start
		diff = new Date(diff)
		var msec = diff.getMilliseconds()
		var sec = diff.getSeconds()
		var min = diff.getMinutes()
		var hr = diff.getHours()-1
		if (min < 10){
			min = "0" + min
		}
		if (sec < 10){
			sec = "0" + sec
		}
		if(msec < 10){
			msec = "00" +msec
		}
		else if(msec < 100){
			msec = "0" +msec
		}
		document.getElementById("chronotime").value = hr + ":" + min + ":" + sec + ":" + msec
		timerID = setTimeout("chrono()", 10)
	}

	chronoStart(){
		document.chronoForm.startstop.value = "stop!"
		document.chronoForm.startstop.onclick = chronoStop
		document.chronoForm.reset.onclick = chronoReset
		start = new Date()
		chrono()
	}

	chronoContinue(){
		document.chronoForm.startstop.value = "stop!"
		document.chronoForm.startstop.onclick = chronoStop
		document.chronoForm.reset.onclick = chronoReset
		start = new Date()-diff
		start = new Date(start)
		chrono()
	}

	chronoReset(){
		document.getElementById("chronotime").value = "0:00:00:000"
		start = new Date()
	}

	chronoStopReset(){
		document.getElementById("chronotime").value = "0:00:00:000"
		document.chronoForm.startstop.onclick = chronoStart
	}

	chronoStop(){
		document.chronoForm.startstop.value = "start!"
		document.chronoForm.startstop.onclick = chronoContinue
		document.chronoForm.reset.onclick = chronoStopReset
		clearTimeout(timerID)
	}
}
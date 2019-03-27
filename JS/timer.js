var h = 7;
var min = 45;
var inProgress = false;

function chrono() {
    if (inProgress) {
        if (h < 18) {
            if (min < 59)
                min++;
            else {
                min = 0;
                h++
            }
        } else
            chronoStop();
        if (min < 10) {
            if (h < 10) {
                document.getElementById("clock").innerHTML = "0" + h + ":0" + min;
            } else {
                document.getElementById("clock").innerHTML = h + ":0" + min;
            }
        } else {
            if (h < 10) {
                document.getElementById("clock").innerHTML = "0" + h + ":" + min;
            } else {
                document.getElementById("clock").innerHTML = h + ":" + min;
            }
        }
        setTimeout(chrono, 1000);
    }
}

function chronoStart() {
    inProgress = true;
    chrono();
}

function chronoStop() {
    inProgress = false;
    chrono();
}

function chronoReset() {
    h = 8;
    min = 0;
    document.getElementById("clock").innerHTML = h + ":" + min;
}

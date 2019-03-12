var h = 8;
var min = 0;
var inProgress = false;

function chrono() {
    if (inProgress) {
        if (h < 18) {
            if (min < 60)
                min++;
            else {
                min = 0;
                h++
            }
        }
        else
            chonoStop();
        document.getElementById("clock").innerHTML = h + ":" + min;
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

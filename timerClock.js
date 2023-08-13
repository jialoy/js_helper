

function getTimeStamp() {
    return new Date().getTime();
}

////--------------- countdown timer clock -------------------------////

function showTimer(timeAllotedInMS) {
    // display timer on each trial
    // (starts from 5 minutes, decreases on each trial based on time elapsed)
    
    var timerDiv = document.getElementById("timerDiv");
    var endTime = new Date(); 

    endTime.setMilliseconds(endTime.getMilliseconds() + timeAllotedInMS);
    
    //we can update this by trial with the following line by updating millisecondsLeft from a previous trial
    //endTime.setMilliseconds(endTime.getMilliseconds() + millisecondsLeft);    // add amount of time left in milliseconds, which decreases on each trial
    var countDownTime = endTime.getTime();
    
    console.log(countDownTime);
    var x = setInterval(function() {
     
        var now = getTimeStamp();
          
        var distance = countDownTime - now;    // distance (amount of time left) between current time and end time
          
        // convert time left to minutes and seconds for display purposes
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        var timeToDisplay = minutes + "m " + seconds + "s";
        
        timerDiv.innerHTML = timeToDisplay;
        
        if (distance < 0) {
            clearInterval(x);
            timerDiv.innerHTML = "TIME OUT";
            //alert("Out of time!");
        }
          
    }, 1000);    
}

showTimer(90000);    //sets a timer for 1 minute 30s
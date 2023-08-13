

function checkRemoveElem(elemId, parentId) {
    // check if parentId contains child element and remove if so
    if (document.getElementById(parentId).contains(document.getElementById(elemId))) {
        document.getElementById(elemId).remove();
    }
}

function toPx(num) {
    var pixels = num.toString()+"px";
    return pixels;
}

String.prototype.format = function () {
    // format string, python style
    var formatted = this;
    for (var arg in arguments) {
        formatted = formatted.split('{' + arg + '}').join(arguments[arg]);
    }
    return formatted;
};

////----------- progress bar ----------------------------------------------
// create a progress bar, append to top of screen, update on each tria

function showProgressBar() {
    document.getElementById("progBaseDiv").style.visibility = "visible";
}

function hideProgressBar() {
    document.getElementById("progBaseDiv").style.visibility = "hidden";
		checkRemoveElem("trialCountDiv", "wrapper");
}

function displayProgress(trialIdx, totalNumTrials) {
  // create div for progress bar based on trial no.
  // and append to base bar div
  
  checkRemoveElem("progressBarDiv", "progBaseDiv");
  
  var trialNo = trialIdx+1;
  var progressPct = trialNo/totalNumTrials*100;
  
  var div = document.createElement("div");
  div.id = "progressBarDiv";
  div.style.position = "relative";
  div.style.backgroundColor = "#4CAF50";
  div.style.height = "15px";
  div.style.width = "{0}{1}".format(progressPct.toString(), "%");
  
  document.getElementById("progBaseDiv").appendChild(div);
}

function displayTrialCount(trialIdx, totalNumTrials) {
    // create div for trial counter
    // display trial count
    
    checkRemoveElem("trialCountDiv", "wrapper");
    
    var trialNo = trialIdx+1;
    
    var w = window.innerWidth;
    var leftPos = w/2+220;
    
    var div = document.createElement("div");
    div.id = "trialCountDiv";
    div.style.position = "absolute";
    div.style.backgroundColor = "none";
    div.style.top = "20px";
    div.style.left = toPx(leftPos);
    div.style.height = "15px";
    div.style.fontFamily = "Arial";
    div.style.fontSize = "14px";
    div.innerHTML = "{0}/{1}".format(trialNo.toString(), totalNumTrials.toString());
    
    document.getElementById("wrapper").appendChild(div);
}

////------------------------------------------------------------------------


totalNumTrials = 10;    //example
trialIdx = 0;    //example, update on each trial

showProgressBar();
displayProgress(trialIdx, totalNumTrials);
displayTrialCount(trialIdx, totalNumTrials);


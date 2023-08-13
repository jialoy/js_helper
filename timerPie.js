
function toPx(num) {
    var pixels = num.toString()+"px";
    return pixels;
}

////----------- circular countdown timer clock --------------//

function timerCanvas(top, left) {
  // create canvas on which we will draw timer
  // top and left determin position of timer
  var canvas = document.createElement("canvas")
  canvas.id = "timerCanvas";
  canvas.style.position = "absolute";
  canvas.style.top = toPx(top);
  canvas.style.left = toPx(left);
  document.getElementById("mainDiv").appendChild(canvas);
  return canvas;
}

function timerBase(canvas){
  // create timer base (empty grey ring)
  var ctx = canvas.getContext("2d");
  ctx.strokeStyle = "#cccccc"
  ctx.lineWidth = 20;
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2.0*Math.PI);
  ctx.stroke();
}

function fillTimer(canvas, amount) {
  // fills timer by specified amount
  var ctx = canvas.getContext("2d");
  var start = 1.5;
  ctx.strokeStyle = "rgb(255, 141, 41)"
  ctx.lineWidth = 20;
  ctx.beginPath();
  ctx.arc(100, 75, 50, start*Math.PI, (start+amount)*Math.PI);
  ctx.stroke();
}

function startTimer(canvas, trialTimeInS) {
  // initiailes timer
  //trialTimeInS: time it should run for in seconds
  var trialTimeInMS = trialTimeInS*1000
  var interval = 2.0/trialTimeInS
  var n=0;
  trialTimerClock = setInterval(function(){
    fillTimer(canvas, (n+interval));
    n += interval;
    }, 1000);
}

////-------------------------------------------------------



var canvas = timerCanvas(100, 100);
timerBase(canvas);
startTimer(canvas, 60);



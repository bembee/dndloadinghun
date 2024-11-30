var tipps = [];
var intervallumTime = 15; // seconds;
var tippsNumber = 0;
var isFullscreen = false;
var elem = document.documentElement;

$(document).ready(function () {
  $.getJSON("hints.json", function (data) {
    $.each(data, function (key, value) {
      tipps[key] = value.label;
    });
    setTips(generateRandomTipp());
  });
  setInterval(function () {
    setTips(generateRandomTipp());
  }, intervallumTime * 1000);
});

function setTips(tippNumber) {
  $(tipp).text(tipps[tippNumber]);
}

function generateRandomTipp() {
  tippsNumber = Math.floor(Math.random() * tipps.length);
  if (tippsNumber >= tipps.length - 1) {
    tippsNumber = 0;
  }
  return tippsNumber;
}

function openFullscreen() {
  console.log(isFullscreen);
  if (!isFullscreen) {
    isFullscreen = true;
    $("#fullscreenButton").html("Exit Fullscreen");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
  } else {
    isFullscreen = false;
    $("#fullscreenButton").html("Fullscreen");
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
  }
}

/*$(function() {
  $.get("https://api.icndb.com/jokes/random?exclude=[nerdy]", function(data) {
    if (data.type == "success") {
      $("#quote").html(data.value.joke);
    }
  });
});*/

var strobeString = "";
var strobeTrigger = "strobe";

$(window).keypress(function(event) {

  strobeString += event.originalEvent.key.toLowerCase();

  strobeString = strobeString.slice(strobeTrigger.length * -1);

  if (strobeString == strobeTrigger) {
    $("body").addClass("strobe");
  } else {
    $("body").removeClass("strobe");
  }

  console.log(strobeString);

});

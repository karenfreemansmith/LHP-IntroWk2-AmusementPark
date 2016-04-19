//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly

//List of rides with height requirements

//if tall enough
//and if short enough

$("#showRides").click(function() {
  var myFeet = parseInt($("#feet").val());
  var myInches = parseInt($("#inches").val());
  myInches += myFeet*12;
  alert("You are " + myInches + " tall");
  $("#rides").append("<li><h2>The Ride!</h2></li>");
  $("#rides").show();
});

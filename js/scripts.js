//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly

//List of rides with height requirements
//Get height
//if tall enough
//and if short enough
//add ride to list
$("#showRides").click(function() {
  $("#rides").append("<li><h2>The Ride!</h2></li>");
  $("#rides").show();
});

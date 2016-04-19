//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly

var theRides = [
  ["Men in Black: Alien Attack!", 60, 84, "Universal Studios, Orlando, FL", "meninblack.jpg"],
  ["Millennium Force", 60, 84, "Cedar Point, Sandusky, OH", "millennium.jpg"],
  ["Kingda Ka", 60, 84, "Six Flags Great Adventure, Jackson, NJ", "kingda.jpg"],
  ["Harry Potter and the Forbidden Journey", 60, 84, "Universal Islands of Adventure, Orlando, FL", "harrypotter.jpg"],
  ["Master Blaster", 60, 84, "Schlitterbahn, New Braunfels, TX", "masterblaster.jpg"],
  ["El Toro", 60, 84, "Six Flags Great Adventure, Jackson, NJ", "eltoro.jpg"],
  ["Goliath", 60, 99, "Six Flags Over Georgia, Austell, GA", "goliath.jpg"],
  ["Wildebeest", 36, 84, "Splashin' Safari, Santa Claus, IN", "wildebeest.jpg"],
  ["Transformers: The Ride", 48, 84, "Universal Studios, Hollywood, Los Angeles, CA", "transformers.jpg"],
  ["Phantom's Revenge", 60, 84, "Kennywood, West Mifflin, PA", "phantomsrevenge.jpg"],
  ["The Simpsons Ride", 36, 84, "Universal Studios, Hollywood, Los Angeles, CA", "simpsons.jpg"],
  ["New Texas Giant", 48, 99, "Six Flags Over Texas, Arlington, TX", "texasgiant.jpg"],
  ["Expedition Everest", 60, 84, "Disney's Animal Kingdom, Lake Buena Vista, FL", "everest.jpg"],
  ["Nitro", 36, 48, "Six Flags Great Adventure, Jackson, NJ", "nitro.jpg"],
  ["The Twilight Zone Tower of Terror", 48, 84, "Disney Hollywood Studios, Anaheim, CA", "twilightzone.jpg"],
  ["The Voyage", 60, 84, "Holiday World Santa Claus, IN", "voyage.jpg"],
  ["GateKeeper", 36, 99, "Cedar Point, Sandusky, OH", "gatekeeper.jpg"],
  ["Top Thrill Dragster", 48, 60, "Cedar Point, Sandusky, OH", "dragster.jpg"],
  ["Revenge of the Mummy", 24, 72, "Universal Studios, Orlando, FL", "mummy.jpg"],
  ["Bizarro", 36, 84, "Six Flags New England, St. Agawam, MA", "bizzaro.jpg"],
  ["Apollo's Chariot", 48, 84, "Busch Gardens, Williamsburg, VA", "chariot.jpg"],
  ["Thunderhead at Dollywood", 60, 84, "Dollywood, Pigeon Forge, TN", "thunderhead.jpg"],
  ["Dudley Do-Rights's Ripsaw Falls", 36, 60, "Universal Islands of Adventure, Orlando, FL", "dudley.jpg"],
  ["Montu", 48, 99, "Busch Gardens, Tampa, FL", "montu.jpg"],
  ["Jurassic Park: The Ride", 60, 84, "Universal Studios, Hollywood, Los Angeles, CA", "jurassic.jpg"],
  ["Alfie's Swings", 24, 40, "Adventure Land, Long Island, NY", "alfies_swings.jpg"],
  ["Helicopters", 20, 52, "Adventure Land, Long Island, NY", "helicopters.jpg"],
  ["Kiddie Carousel", 12, 40, "Adventure Land, Long Island, NY", "kiddie_carousel.jpg"]
];

$("#showRides").click(function() {
  var myFeet = parseInt($("#feet").val());
  var myInches = parseInt($("#inches").val());
  var modalCode = "";
  myInches += myFeet*12;
  $("#rides").empty();
  theRides.forEach(function(ride, index) {
    if((ride[1] <= myInches) && (ride[2] >= myInches)) {
      modalCode="<div class='modal fade' id='more"+ index +"'>";
      modalCode+="<div class='modal-dialog'>";
      modalCode+="<div class='modal-content'>";
      modalCode+="<div class='modal-header'>";
      modalCode+="<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>X</button>";
      modalCode+="<h4 class='modal-title'>"+ ride[0] + ": " + ride[3] + "</h4>";
      modalCode+="</div>";
      modalCode+="<div class='modal-body'>";
      modalCode+="<div class='container'><img src='img/"+ ride[4]  +"' class='img-responsive'></div>";
      modalCode+="</div>";
      modalCode+="</div>";
      modalCode+="</div>";
      modalCode+="</div>";
      $("#popups").append(modalCode);
      $("#rides").append("<div class='col-sm-3'><a data-toggle='modal' href='#more"+ index +"'><img src='img/" + ride[4] + "'></a><p><strong>" + ride[0] + "</strong></p></div>");
    }
  });
  $("#rides").show();
});

$(document).ready(function () {
    console.log("Hello world");
  
    $(".imageEarth, .imageMoon, .imageAstro, .imageLunarVehicle, .imageApolloBig, .imageApolloCircle, .imageMini, .imageRecordOne, .imageRecordThree, .imageRecordFour, .imageRecordFive, .imageRecordSix, .imageRecordSeven, .imageIssTrans, .imageIssLong, .imageIssCircle, .imageIssTriangle, .imageGnssCircle, .imageGnssSquare1, .imageGnssSquare2, .imageGnssIphone, .imageObBlue, .imageObYellow, .imageObRed, .imageEarthEclipse, .imageObCircle, .imageObBig").draggable();
  });

  function pickimg(){
    var imagenumber = 5 ;
    var randomnumber = Math.random() ;
    var rand1 = Math.round( (imagenumber-1) * randomnumber) + 1;
    images = new Array
    images[1] = "assets/images/observation/ob-arabian-sea.jpg"
    images[2] = "assets/images/observation/ob-surigae.jpg"
    images[3] = "assets/images/observation/ob-sydney-flooding.jpg"
    images[4] = "assets/images/observation/ob-lituya-bay.jpg"
    images[5] = "assets/images/observation/ob-pacaya-eruption.jpg"
    var image = images[rand1]
    document.imageObSev.src = image
    };
    
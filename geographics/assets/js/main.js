$(document).ready(function () {
    console.log("Hello world");
    $(".imageMoon, .imageAstro, .imageLunarVehicle, .imageApolloBig, .imageApolloCircle, .imageMini, .imageRecordOne, .imageRecordThree, .imageRecordFour, .imageRecordFive, .imageRecordSix, .imageRecordSeven, .imageIssTrans, .imageIssLong, .imageIssCircle, .imageIssTriangle, .imageGnssCircle, .imageGnssSquare1, .imageGnssSquare2, .imageGnssIphone, .imageObBlue, .imageObYellow, .imageObRed, .imageEarthEclipse, .imageObCircle, .imageObBig, .imageWindowOb1, .imageWindowOb2").draggable();
  });


  function ImageCollection(images) {
    this.images = images;
    this.i = 0;
    this.next = function(img) {
    this.i++;
    if (this.i == images.length)
        this.i = 0;
        img.src = images[this.i];
    } 
}

  var ic1 = new ImageCollection([
    'assets/images/observation/ob-guatemala.jpg',
    'assets/images/observation/ob-ice.jpg',
    'assets/images/observation/ob-australia.jpg',
    'assets/images/observation/ob-sverdrup.jpg'
  ]);

  var ic2 = new ImageCollection([
    'assets/images/observation/ob-surigae.jpg',
    'assets/images/observation/ob-southcarolina.jpg',
    'assets/images/observation/ob-laura.jpg',
    'assets/images/observation/ob-pacaya-eruption.jpg'
  ]);
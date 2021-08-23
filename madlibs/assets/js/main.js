function refreshPage(){
    window.location.reload();
}

$(document).ready(function() {
    var image = new Array ();
    image[0] = "assets/images/Dan1.png";
    image[1] = "assets/images/Dan2.png";
    image[2] = "assets/images/Dan3.png";
    image[3] = "assets/images/Dan4.png";
    image[4] = "assets/images/Dan5.png";
    image[5] = "assets/images/Dan6.png";
    var size = image.length
    var x = Math.floor(size*Math.random())
$('#randomDan').attr('src',image[x]);
});

$(document).ready(function() {
    var quotes = new Array("Everyone right to go? Great.", "Everybody ready? Thanks.", "Are we all good to go?", "Are you guys all right to go?");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.greeting').append(quotes[randno]);
    console.log(randno);
});

$(document).ready(function() {
    var quotes = new Array("bionic", "reflective", "surreal", "spotted", "blue", "green", "yellow", "purple", "red", "baby-like", "duck-like", "dinosaur-like", "powdery");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.blank1').append(quotes[randno]);
    console.log(randno);
});

$(document).ready(function() {
    var quotes = new Array("eating", "drinking", "your panda costume", "building Lego", "transforming", "reading", "D.I.Y", "graduating", "drawing", "journaling", "knitting", "painting");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.blank2').append(quotes[randno]);
    console.log(randno);
});

$(document).ready(function() {
    var quotes = new Array("skateboarding skills", "marriage", "violin skills", "tarot cards", "desire for tea", "diary entries", "guitar skills");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.blank3').append(quotes[randno]);
    console.log(randno);
});

$(document).ready(function() {
    var quotes = new Array("Astro-Boy", "Baby", "Backpack", "Cherry", "Blossom", "Toy", "Dinosaur", "Dog", "Duck", "Dumpling", "Grandparent", "Identical-Twin", "Mario", "Merry-Go-Round", "Micro-Robot", "Mochi", "Photobooth", "Shoe", "Sunrise", "Zoo-York", "Sugar Spoon", "Umbrella", "Hairbrush", "Candle");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.blank4').append(quotes[randno]);
    console.log(randno);
});

$(document).ready(function() {
    var quotes = new Array("astro-boys", "babies", "backpacks", "cameras", "costumes", "diaries", "dinosaurs", "dogs", "dumplings", "engagement rings", "eyedrops", "figurines", "films", "flowers", "friendship bracelets", "GameBoys", "giraffes", "grandparents", "guitars", "identical twins", "journal", "metronomes", "micro-robots", "Nan's teacups", "shoes", "stamps", "stars", "suitcases", "toys", "graduates", "skaters");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.blank5').append(quotes[randno]);
    console.log(randno);
});

$(document).ready(function() {
    var quotes = new Array("astro-boys", "babies", "backpacks", "cameras", "costumes", "diaries", "dinosaurs", "dogs", "dumplings", "engagement rings", "eyedrops", "figurines", "films", "flowers", "friendship bracelets", "GameBoys", "giraffes", "grandparents", "guitars", "identical twins", "journal", "metronomes", "micro-robots", "Nan's teacups", "shoes", "stamps", "stars", "suitcases", "toys", "graduates", "skaters");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.blank6').append(quotes[randno]);
    console.log(randno);
});

$(document).ready(function() {
    var quotes = new Array("bionic", "handmade", "reflective", "surreal", "spotted", "blue", "green", "yellow", "purple", "red", "children's", "friendship", "engagement");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.blank7').append(quotes[randno]);
    console.log(randno);
});

$(document).ready(function() {
    var quotes = new Array("figurines", "backpacks", "bricks", "cameras", "toys", "costumes", "dinosaurs", "ducks", "dogs", "dumplings", "rings", "necklaces", "flowers", "bracelets", "giraffes", "yarn", "guitars", "hairbrushes", "journals", "jumpsuits", "lanterns", "oil pastels", "pencils", "scarves", "paintings", "shoes", "skateboards", "stamps", "suitcases", "tea", "umbrellas", "violins");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.blank8').append(quotes[randno]);
    console.log(randno);
});


$(document).ready(function() {
    var quotes = new Array("2022 diaries", "eyedrops", "GameBoys", "Lego", "metronomes", "old photographs", "white powder", "robots", "setting spray", "shoes", "skateboards", "sleep masks", "stamps", "sugar spoons", "suitcases", "sunscreen", "tarot cards");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.blank9').append(quotes[randno]);
    console.log(randno);
});

$(document).ready(function() {
    var quotes = new Array("engagement ring shopping", "friendship bracelet retrieval", "delivery of Grandma's yarn", "metronome repair", "skatebaord repair", "tarot card reading");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.blank10').append(quotes[randno]);
    console.log(randno);
});

$(document).ready(function() {
    var quotes = new Array("skateboarding", "surrealist painting", "GameBoy tournaments", "journaling", "micro-robot racing", "duck spotting");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.blank11').append(quotes[randno]);
    console.log(randno);
});

$(document).ready(function() {
    var quotes = new Array("skateboarding", "surrealist painting", "GameBoy tournaments", "journaling", "micro-robot racing", "duck spotting");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.blank12').append(quotes[randno]);
    console.log(randno);
});

$(document).ready(function() {
    var quotes = new Array("Duckzeneca", "Dogzer", "Bluezeneca", "Greenzeneca", "Astrozer", "Mariozeneca", "Legozeneca", "Pandazer", "Starzer", "Teazeneca", "Zoozer");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.blank13').append(quotes[randno]);
    console.log(randno);
});

$(document).ready(function() {
    var quotes = new Array("graduation ceremonies", "watching the sunrise", "visiting the photobooth", "riding the merry-go-round", "sharing mochi", "group oil pastel sessions", "star gazing", "walking with without umberellas", "leaving home without a suitcase");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.blank14').append(quotes[randno]);
    console.log(randno);
});

$(document).ready(function() {
    var quotes = new Array("an old dog toy", "a painted stone", 
    "a sugar spoon", "nan's teacup", "a dumpling", "a brick", "a bag");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.blank15').append(quotes[randno]);
    console.log(randno);
});

$(document).ready(function() {
    var quotes = new Array("skateboard", "take photographs", "film", "wear a panda costume", "draw", "paint", "watch a sunrise", "see stars", "eat sugar", "play violin", "build lego", "read", "knit", "journal", "photobomb");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.blank16').append(quotes[randno]);
    console.log(randno);
});

$(document).ready(function() {
    var quotes = new Array("grandparents", "identical twin", "best friend", "graduates", "dinosaur", "dog", "duck", "grandma");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.blank17').append(quotes[randno]);
    console.log(randno);
});

$(document).ready(function() {
    var quotes = new Array("baby", "dinosaur enthusiast", "dog", "duck umberella enthusiast", "figurine enthusiast", "camera enthusiast", "identical twin", "skateboarder", "surreal painter", "tarot card reader", "violinist", "sunscreen wearer", "D.I.Y fan", "winner of awards");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.blank18').append(quotes[randno]);
    console.log(randno);
});

$(document).ready(function() {
    var quotes = new Array("attending graduation ceremonies", "watching the sunrise", "visiting the photobooth", "riding the merry-go-round", "making surreal paintings", "photobombing at weddings", "starting D.I.Y projects", "building lego", "brushing our hair", "making friendship bracelets", "playing Mahjong");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.blank19').append(quotes[randno]);
    console.log(randno);
});

$(document).ready(function() {
    var quotes = new Array("grandparents", "identical twins", "best friends", "graduates", "dinosaurs", "dogs", "ducks", "grandmas");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.blank20').append(quotes[randno]);
    console.log(randno);
});

$(document).ready(function() {
    var quotes = new Array("the photobooth", "jurrasic park", "our favourite D.I.Y store", "see the cherry blossoms", "see Astro-Boy", "wear the panda costume", "Mario's house", "tempt fate with the tarot cards");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.blank21').append(quotes[randno]);
    console.log(randno);
});

$(document).ready(function() {
    var quotes = new Array("figurines", "backpacks", "bricks", "cameras", "toys", "costumes", "dinosaurs", "ducks", "dogs", "dumplings", "rings", "necklaces", "flowers", "bracelets", "giraffes", "yarn", "guitars", "hairbrushes", "journals", "jumpsuits", "lanterns", "oil pastels", "pencils", "scarves", "paintings", "shoes", "skateboards", "stamps", "suitcases", "tea", "umbrellas", "violins");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.blank22').append(quotes[randno]);
    console.log(randno);
});
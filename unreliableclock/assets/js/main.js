var start = 0;
function count() {    
    start = start + 1;
    var n = document.getElementById('clockWrong');
    n.innerHTML = start;
}
function begin() {
    count();
    var amountTime = Math.round(Math.random() * (3200 - 100)) + 100;
    setTimeout(begin, amountTime);
} 
document.addEventListener('DOMContentLoaded', function () {    
    begin();
});

var start2 = 0;
function count2() {    
    start2 = start2 + 1;
    var n2 = document.getElementById('clockCorrect');
    n2.innerHTML = start2;
}
function begin2() {
    count2();
    setTimeout(begin2, 1000);
} 
document.addEventListener('DOMContentLoaded', function () {    
    begin2();
});



$(document).ready(function(){
    $(".switch input").on("change", function(e) {
      const isOn = e.currentTarget.checked;
    
    if (isOn) {
        $(".left").hide();
    } else {
        $(".left").show();
    }
  });
});



$(document).ready(function(){
    var cursor = $(".cursor");
    
        $(window).mousemove(function(e) {
            cursor.css({
                top: e.clientY - cursor.height() / 2,
                left: e.clientX - cursor.width() / 2
            });
        });
    
        $(window)
            .mouseleave(function() {
                cursor.css({
                    opacity: "0"
                });
            })
            .mouseenter(function() {
                cursor.css({
                    opacity: "1"
                });
            });
    
        $(".linkNPR")
            .mouseenter(function() {
                cursor.css({
                    transform: "scale(2.6)"
                });
            })
            .mouseleave(function() {
                cursor.css({
                    transform: "scale(1)"
                });
            });

        $("h3")
            .mouseenter(function() {
                cursor.css("background-color", "#955798");
            })
            .mouseenter(function() {
                cursor.css({
                    transform: "scale(1.8)"
                });
            })
            .mouseleave(function() {
                cursor.css({
                    transform: "scale(1)"
                });
            });

        $("h4")
            .mouseenter(function() {
                cursor.css("background-color", "#C2B33B");
            })
            .mouseenter(function() {
                cursor.css({
                    transform: "scale(1.8)"
                });
            })
            .mouseleave(function() {
                cursor.css({
                    transform: "scale(1)"
                });
            });

         $("h5")
            .mouseenter(function() {
                cursor.css("background-color", "#16693B"); 
            })
            .mouseenter(function() {
                cursor.css({
                    transform: "scale(1.8)"
                });
            })
            .mouseleave(function() {
                cursor.css({
                    transform: "scale(1)"
                });
            });

        $("h6")
            .mouseenter(function() {
                cursor.css("background-color", "#C2693B");
            })
            .mouseenter(function() {
                cursor.css({
                    transform: "scale(1.8)"
                });
            })
            .mouseleave(function() {
                cursor.css({
                    transform: "scale(1)"
                });
            });

            $(".switch")
            .mouseenter(function() {
                cursor.css({
                    transform: "scale(0.4)"
                });
            })
            .mouseleave(function() {
                cursor.css({
                    transform: "scale(1)"
                });
            });


        $(window)
            .mousedown(function() {
                cursor.css({
                    transform: "scale(.2)"
                });
            })
            .mouseup(function() {
                cursor.css({
                    transform: "scale(1)"
                });
            });
    });
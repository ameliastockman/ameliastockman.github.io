$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 210) {
            $("body").css('background-color', 'blue');
        } else {
            $("body").css('background-color', 'black');
        }
    });
});

$(document).ready(function() {
    var button = document.getElementById('button');
    var result = document.getElementById('messInput');
      
      // SEND USER INPUT MESSAGE
    document.querySelector('button').addEventListener("click", function() {
          // Store results
        var resultStored = result.value;
          // Reset value of input
        result.value = "";
          // Get items container
        var messages = document.getElementById('messages');
          // Add items to container
        messages.innerHTML += "<div class='human'>" + resultStored + "</div>";
    });
  
      // SEND BOT ARRAY MESSAGE
    var arr = ["One","Two","Three","Four"];
    var index = 0;
    document.querySelector('button').addEventListener("click", function() {
          // What does the Bot say?
        var botmessage = arr[index];
          index = (index + 1) % arr.length;
          // Add items to container
        messages.innerHTML += "<div class='bot'>" + botmessage + "</div>";     
    });

      // SCROLL TO BOTTOM OF DIV
    document.querySelector('button').addEventListener("click", function scrollDown() {
          $("#messages").animate({ scrollTop: $(document).height() },'slow');
    });

});
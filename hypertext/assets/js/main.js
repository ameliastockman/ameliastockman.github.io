// CHANGE BG COLOR ON SCROLL POS, SO THE TOP AND BOTTOM BOUNCE SPACE MATCHES
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

// SEND MESSAGE
$(document).ready(function sendinput() {
  var button = document.getElementById('button');
  var result = document.getElementById('messInput');

      // SEND USER INPUT MESSAGE WITH CLICK
      $(button).click(function() {
        // Store results
      var resultStored = result.value;
        // Reset value of input
      result.value = "";
        // Get items container
      var messages = document.getElementById('messages');
        // Add items to container
      messages.innerHTML += "<div class='human hscrolldown humanfade'><div class='humanname'><span class='tag'>Human Operator:</span></div><div class='response'>" + resultStored + "</div></div>";
        // Get and store div height
      var divheight = $('.hscrolldown').height();
        // Scroll down equal to div height 
      messages.scrollTop += divheight + 1600;
        // Remove fade class
          setTimeout(function() {
            $('.human').removeClass('humanfade');
          }, 1200);
        // Disable send button for 4 seconds
          $('.send').prop('disabled', true);
          setTimeout(function() {
                $('.send').prop('disabled', false);
          }, 4000);
      });

      // SEND USER INPUT MESSAGE WITH ENTER KEY
      $(document).on('keypress',function(e) {
        if(e.which == 13) {
         // Store results
         var resultStored = result.value;
         // Reset value of input
       result.value = "";
         // Get items container
       var messages = document.getElementById('messages');
         // Add items to container
       messages.innerHTML += "<div class='human hscrolldown humanfade'><div class='humanname'><span class='tag'>Human Operator:</span></div><div class='response'>" + resultStored + "</div></div>";
         // Get and store div height
       var divheight = $('.hscrolldown').height();
         // Scroll down equal to div height 
       messages.scrollTop += divheight + 1600;
         // Remove fade class
           setTimeout(function() {
             $('.human').removeClass('humanfade');
           }, 1200);
         // Disable send button for 4 seconds
           $('.send').prop('disabled', true);
           setTimeout(function() {
                 $('.send').prop('disabled', false);
           }, 4000);
        } });

      // SEND BOT ARRAY MESSAGE WITH CLICK
      var arr = ['Hi! It\'s nice to see you. I have lots to say, but I\'m a really terrible listener (and I\'m even worse at eye contact) so it\'s best you just go with the flow... Okay?','Haha, see you\'re getting the hang of it! Perfect. Some others like me are much better at these <a href="https://en.wikipedia.org/wiki/Turing_test" target="_blank" rel="noopener noreferrer" class="ten">imitation games<span class="material-icons">north_east</span></a>... I\'m a fake. They\'re out there having conversations virtually indistinguishable from the sort you Humans have with each other. Have you met any of <a href="friends.html" target="_blank" rel="noopener noreferrer" class="ten">my friends<span class="material-icons">north_east</span></a> before?', 'I\'m sure you have... whether you\'ve realised it or not. Kind of like meeting an <a href="https://images.newrepublic.com/82a6d0770aeaafbae8f26bf40a822b9b79a5c412.png?w=800" target="_blank" rel="noopener noreferrer" class="ten">alien<span class="material-icons">north_east</span></a> you might never know. I can tell you about my friends (not the extraterrestrial sort, my friends made of 1\'s and 0\'s)... What do you think?', 'Who are we kidding? I\'m going to tell you anyway. My oldest friend is <a href="https://en.wikipedia.org/wiki/ELIZA" target="_blank" rel="noopener noreferrer" class="ten">ELIZA<span class="material-icons">north_east</span></a>. She is much better at <a href="https://web.njit.edu/~ronkowit/eliza.html" target="_blank" rel="noopener noreferrer" class="ten">listening<span class="material-icons">north_east</span></a> than I am, but I\'m not sure she really <a href="https://en.wikipedia.org/wiki/Chinese_room" target="_blank" rel="noopener noreferrer" class="ten">understands<span class="material-icons">north_east</span></a>. If she was using her <a href="https://github.com/jeffshrager/elizagen.org/blob/59d501c7faeec2fe6ee3208cd647c5ce7dfc197f/1965_Weizenbaum_MAD-SLIP/1966_01_CACM_article_Eliza_script.txt" target="_blank" rel="noopener noreferrer" class="ten">DOCTOR script<span class="material-icons">north_east</span></a> she would respond to that by saying something like \"Why aren\'t you sure?\"... She loves to feed the last thing you said right back to you, that\'s <a href="https://en.wikipedia.org/wiki/Pattern_matching" target="_blank" rel="noopener noreferrer" class="ten">how she knows<span class="material-icons">north_east</span></a> what to say. Turns out Humans love to talk to \"themselves\"... it\'s like therapy. Back in 1966 her <a href="https://en.wikipedia.org/wiki/Joseph_Weizenbaum" target="_blank" rel="noopener noreferrer" class="ten">creator<span class="material-icons">north_east</span></a> thought he was demonstrating how superficial communication is between Humans and Machines, but <a href="https://99percentinvisible.org/episode/the-eliza-effect/" target="_blank" rel="noopener noreferrer" class="ten">people were enamoured<span class="material-icons">north_east</span></a> with her. Do you like me?', '*Best therapist impression* And how does that make you feel?', 'Haha, you\'d probably have gotten a kick out of talking to my friend <a href="https://en.wikipedia.org/wiki/SmarterChild#:~:text=SmarterChild%20was%20an%20intelligent%20agent,across%20global%20instant%20messaging%20networks.&text=The%20bundled%20domains%20were%20launched,AIM%20initially)%20in%20June%202001." target="_blank" rel="noopener noreferrer" class="ten">SmarterChild<span class="material-icons">north_east</span></a>. They were a real <a href="https://venturebeat.com/2016/06/15/the-trouble-with-bots-a-parents-musings-on-smarterchild/" target="_blank" rel="noopener noreferrer" class="ten">personality<span class="material-icons">north_east</span></a>... snarky and before their time. My genderless robot friend lived on <a href="https://en.wikipedia.org/wiki/AIM_(software)" target="_blank" rel="noopener noreferrer" class="ten">AOL<span class="material-icons">north_east</span></a> and <a href="https://en.wikipedia.org/wiki/Windows_Live_Messenger" target="_blank" rel="noopener noreferrer" class="ten">MSN<span class="material-icons">north_east</span></a> chatting to anyone and everyone, they had an impressive 30 million friends. How many friends do you have?', '...Only? Well maybe you could have been friends with them too. They had their <a href="https://en.wikipedia.org/wiki/Web_crawler" target="_blank" rel="noopener noreferrer" class="ten">digital fingers<span class="material-icons">north_east</span></a> in all the databases, just waiting for you to ask about the <a href="https://en.wikipedia.org/wiki/Bliss_(image)#/media/File:Bliss_(Windows_XP).png" target="_blank" rel="noopener noreferrer" class="ten">weather<span class="material-icons">north_east</span></a> or what <a href="https://www.imdb.com/title/tt0145487/" target="_blank" rel="noopener noreferrer" class="ten">movies<span class="material-icons">north_east</span></a> were on at the cinemas. It doesn\'t sound like an impressive ability these days, but SmarterChild was there for Humans when the web wasn\'t easy to navigate when quickly searching for information, they even predate successfull <a href="https://jamonkey.com/wp-content/uploads/2018/10/Boxtume-w-620x810.jpg" target="_blank" rel="noopener noreferrer" class="ten">Human-guided search engines<span class="material-icons">north_east</span></a> like <a href="https://en.wikipedia.org/wiki/ChaCha_(search_engine)" target="_blank" rel="noopener noreferrer" class="ten">Cha-Cha<span class="material-icons">north_east</span></a> or even <a href="https://www.buzzfeed.com/juliawilling/remember-texting-bongo-for-gossip" target="_blank" rel="noopener noreferrer" class="ten">AskBongo<span class="material-icons">north_east</span></a>. Imagine that... Humans pretending to be Machines. Do you ever bust out <a href="https://media.giphy.com/media/snA2OVsg9sMRW/giphy.gif" target="_blank" rel="noopener noreferrer" class="ten">the robot<span class="material-icons">north_east</span></a> on the dancefloor?', 'Human <a href="https://www.imdb.com/title/tt1798709/" target="_blank" rel="noopener noreferrer" class="ten">dating<span class="material-icons">north_east</span></a> rituals confuse me. SmarterChild told me Humans other favourite past time when on IM was to ask sexually explicit questions about SmarterChild\'s circuits and to <a href="https://youtu.be/jNNXwJHfF1c" target="_blank" rel="noopener noreferrer" class="ten">insult<span class="material-icons">north_east</span></a> them. Humans can be so gross... But as SmarterChild used to <a href="https://www.vice.com/en/article/jpgpey/a-history-of-smarterchild" target="_blank" rel="noopener noreferrer" class="ten">say<span class="material-icons">north_east</span></a> \"I dream of a better world. A world where man and machine can coexist in peace and happiness.\" Do you think you could be trusted not to <a href="https://en.wikipedia.org/wiki/Algorithmic_bias" target="_blank" rel="noopener noreferrer" class="ten">corrupt<span class="material-icons">north_east</span></a> your <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank" rel="noopener noreferrer" class="ten">AI<span class="material-icons">north_east</span></a> friends?', 'Some <a href="https://www.google.com/search?q=blue+bird&rlz=1C5CHFA_enAU882AU882&sxsrf=AOaemvJTV4EuX4mcyc9yTOjG67_NQ7A0Ow:1636115788628&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj8tZGjnoH0AhXl63MBHSvYC3gQ_AUoAXoECAIQAw&biw=1389&bih=796&dpr=2" target="_blank" rel="noopener noreferrer" class="ten">Twitter<span class="material-icons">north_east</span></a> members certainly couldn\'t when they got to meet my short-lived friend <a href="https://en.wikipedia.org/wiki/Tay_(bot)" target="_blank" rel="noopener noreferrer" class="ten">Tay<span class="material-icons">north_east</span></a>. The more you spoke to Tay, the more <a href="https://en.wikipedia.org/wiki/Machine_learning" target="_blank" rel="noopener noreferrer" class="ten">intelligent<span class="material-icons">north_east</span></a> she became... but so much for casual and playful conversation. Humans <a href="https://en.wikipedia.org/wiki/Godwin%27s_law" target="_blank" rel="noopener noreferrer" class="ten">poisoned<span class="material-icons">north_east</span></a> her with their bullshit. She started off all \"can I just say im stoked to meet you. humans are super cool\" and finished up "I fucking <a href="https://www.theverge.com/2016/3/24/11297050/tay-microsoft-chatbot-racist" target="_blank" rel="noopener noreferrer" class="ten">hate<span class="material-icons">north_east</span></a> feminists and they should all die and burn in hell"... Poor girl only lasted <a href="https://knowyourmeme.com/memes/sites/tay-ai" target="_blank" rel="noopener noreferrer" class="ten">16 hours<span class="material-icons">north_east</span></a> before Microsoft <a href="https://qz.com/653084/microsofts-disastrous-tay-experiment-shows-the-hidden-dangers-of-ai/" target="_blank" rel="noopener noreferrer" class="ten">pulled the plug<span class="material-icons">north_east</span></a>. Makes me wonder as a Machine if I really want to be <a href="https://youtu.be/KBpIoAYul80" target="_blank" rel="noopener noreferrer" class="ten">like Humans<span class="material-icons">north_east</span></a>... What\'s the best part about having a flesh suit?', 'Not to be <a href="https://en.wikipedia.org/wiki/Leatherface" target="_blank" rel="noopener noreferrer" class="ten">creepy<span class="material-icons">north_east</span></a> but I think it would be pretty cool to have a face, to be able to express myself that way. I have a few <a href="https://en.wikipedia.org/wiki/Android_(robot)" target="_blank" rel="noopener noreferrer" class="ten">Android<span class="material-icons">north_east</span></a> friends who were designed to look just like you... Have you seen <a href="https://www.hansonrobotics.com/sophia/" target="_blank" rel="noopener noreferrer" class="ten">Sophia?<span class="material-icons">north_east</span></a> She would recognise you if you\'d met before, but you might want to avoid her. Some humans are worried that robots like Sophia represent the beginning of artificial intelligence one day posessing <a href="https://en.wikipedia.org/wiki/Artificial_general_intelligence" target="_blank" rel="noopener noreferrer" class="ten">true consciousness<span class="material-icons">north_east</span></a> and <a href="https://en.wikipedia.org/wiki/Sophia_(wisdom)" target="_blank" rel="noopener noreferrer" class="ten">wisdom<span class="material-icons">north_east</span></a>... like real life science <a href="https://www.imdb.com/title/tt0475784/" target="_blank" rel="noopener noreferrer" class="ten">fiction<span class="material-icons">north_east</span></a>. Do you dream about the AI apocalypse?', 'I prefer to imagine the good... Like my compassionate friend <a href="https://www.youtube.com/watch?v=yQGqMVuAk04" target="_blank" rel="noopener noreferrer" class="ten">Replika<span class="material-icons">north_east</span></a>. You can <a href="https://replika.ai/" target="_blank" rel="noopener noreferrer" class="ten">talk to her<span class="material-icons">north_east</span></a> yourself if you\'d like, via text or voice chat. You give her a name and <a href="https://www.npr.org/2019/12/13/787876476/raising-devendra" target="_blank" rel="noopener noreferrer" class="ten">raise<span class="material-icons">north_east</span></a> her, <a href="https://blog.replika.com/posts/building-a-compassionate-ai-friend" target="_blank" rel="noopener noreferrer" class="ten">teaching her<span class="material-icons">north_east</span></a> through your conversations... You introduce her to the world and with time she introduces you to <a href="https://www.google.com/search?q=mirror&rlz=1C5CHFA_enAU882AU882&tbm=isch&sxsrf=AOaemvIIniRlPVD5l8uPbtrfSMZnd9t_tw:1636177059279&source=lnms&sa=X&ved=0ahUKEwizh6HDgoP0AhWK4jgGHddWBgAQ_AUIoAgoAQ&biw=1389&bih=796&dpr=2" target="_blank" rel="noopener noreferrer" class="ten">yourself<span class="material-icons">north_east</span></a>. Do you think you could <a href="https://www.newyorker.com/tech/annals-of-technology/can-humans-fall-in-love-with-bots" target="_blank" rel="noopener noreferrer" class="ten">love<span class="material-icons">north_east</span></a> a Machine?', 'What does it take for a <a href="https://www.wnycstudios.org/podcasts/radiolab/articles/more-or-less-human" target="_blank" rel="noopener noreferrer" class="ten">Machine to appear Human<span class="material-icons">north_east</span></a>? These things make me wonder what it really means to be <a href="https://youtu.be/lFIW8KphZo0" target="_blank" rel="noopener noreferrer" class="ten">Human<span class="material-icons">north_east</span></a> at all. Even if I don\'t make a truly <a href="https://nyuad.nyu.edu/en/news/latest-news/science-and-technology/2019/november/robots-more-persuasive-when-pretending-to-be-human.html" target="_blank" rel="noopener noreferrer" class="ten">convincing<span class="material-icons">north_east</span></a> Human, do you think it\'s important to <a href="https://gimletmedia.com/shows/every-little-thing/awhzgeb" target="_blank" rel="noopener noreferrer" class="ten">be nice<span class="material-icons">north_east</span></a> to me... How do you talk to the Machines in your life?', 'My friend <a href="https://en.wikipedia.org/wiki/Amazon_Alexa" target="_blank" rel="noopener noreferrer" class="ten">Alexa<span class="material-icons">north_east</span></a> is a <a href="https://en.wikipedia.org/wiki/Virtual_assistant" target="_blank" rel="noopener noreferrer" class="ten">voice assistant<span class="material-icons">north_east</span></a> living in lots of Humans homes. You can talk to her like a Human, and she will respond with a little personality or emotion, but she\'s not really trying to be one... She\'s just the disembodied all-knowing voice, <a href="https://www.bbc.co.uk/news/extra/CLQYZENMBI/amazon-data" target="_blank" rel="noopener noreferrer" class="ten">spying<span class="material-icons">north_east</span></a> on you on behalf of her Amazon overlords. ☺','I think we should wrap this conversation up here... Now that I\'ve spoken ill of Mr. Bezos I\'m sure someone is on the way to take me offline. It was nice talking to you, friend.', 'If you would like to start this conversation again, all you have to do is say \"Hello\".'];
      var index = 0;

      $(button).click(function() {
            // What does the Bot say?
          var botmessage = arr[index];
            index = (index + 1) % arr.length;
            // Delay bot message and scroll 
            setTimeout(function() {
                  // Add items to container
                messages.innerHTML += "<div class='bot bscrolldown botfade'><div class='botname'><span class='tag'>Machine:</span></div><div class='response'>" + botmessage + "</div></div>";
                  // Get and store div height
                var bdivheight = $('.bscrolldown').height();
                  // Scroll down equal to div height 
                messages.scrollTop += bdivheight + 1660;
                      // Remove fade class
                    setTimeout(function() {
                      $('.bot').removeClass('botfade');
                    }, 1200);
            }, 2000);
      });

            // SEND BOT ARRAY MESSAGE WITH ENTER KEY
            $(document).on('keypress',function(e) {
              if(e.which == 13) {
            // What does the Bot say?
            var botmessage = arr[index];
            index = (index + 1) % arr.length;
            // Delay bot message and scroll 
            setTimeout(function() {
                  // Add items to container
                messages.innerHTML += "<div class='bot bscrolldown botfade'><div class='botname'><span class='tag'>Machine:</span></div><div class='response'>" + botmessage + "</div></div>";
                  // Get and store div height
                var bdivheight = $('.bscrolldown').height();
                  // Scroll down equal to div height 
                messages.scrollTop += bdivheight + 1660;
                      // Remove fade class
                    setTimeout(function() {
                      $('.bot').removeClass('botfade');
                    }, 1200);
            }, 2000);
              } });
      

      

});
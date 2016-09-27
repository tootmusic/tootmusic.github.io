//Code by @harsithr. 
//Scripted for @tootmusic.
//Visit tootmusic.github.io for more details. 
//Visit api.jquery.org for any specific function related queries.
//This is the player.js file with ONLY the code related to the FUNCTIONING OF THE MUSIC PLAYER.  
        
$(function(){ // Wrap all that that is going to happen in a function 
  
    var a = audiojs.createAll({ //This is the defaut code that is required to initialise the audiojs plugin. 
    //Autoplay the track.
    trackEnded: function(){ //When the track has ended the perform function.
    
    var next = $('ol li.playing').next(); //Variable 'next' selects the following value of the current list element that is playing. 
    if (!next.length) next = $('ol li').first(); //When the list exhausts the track to be played will not be defined as a result of which the app crashes. so it reverts back to the first track.
    next.addClass('playing').siblings().removeClass('playing'); //This line adds the class 'playing' to the next element and removes the 'playing' class from the previous element.
    audio.load($('a', next).attr('data-src')); //This loads the specified track and keeps it ready for playing.
    audio.play(); //This plays the track specified 
    }
  }); 
  
  
  //Load the first track.
  
  var audio = a[0]; //Vaiable audio is an array. The first value ofthis is the first song which will be loaded immediately on start. 
  first = $('ol a').attr('data-src');
  $('ol li').first().addClass('playing'); //These lines of code set the required properties for playing the song.
  audio.load(first); //This loads the specified track and keeps it ready for playing.
  
  
  //Load tracks on click. 
  
  $('ol li').click(function(e){
    
    e.preventDefault(); //As the name suggests this jquery function disables the default functions of the 'list' element
    $(this).addClass('playing').siblings().removeClass('playing');//It adds the 'playing' class to the clicked element and removes it from all the other sibiling elements.
    audio.load($('a',this).attr('data-src')); //This loads the specified track and keeps it ready for playing.
    audio.play(); //This plays the track specified
  }); 
    
  //Move to previous song on button click.
  $("#previousSong").click(function(){
    
    var prev = $('ol li.playing').prev(); //The logical flow of this is same as the first segment of the Autoplay code (lines 3-15). It gets the previous element of the track being played. 
    if (!prev.length) prev = $('ol li').last(); //If it reaches the first elemnt, the list exhausts and the code crashes. So it reverts back to the last track.
    prev.addClass('playing').siblings().removeClass('playing');//It adds the 'playing' class to the previous element and removes it from all the other sibiling elements.
    audio.load($('a', prev).attr('data-src'));//This loads the specified track and keeps it ready for playing. 
    audio.play(); //This plays the track specified
    
  }); 
  
  //Pause song on click
  $("#pauseSong").click(function(){
    
    audio.playPause(); //This inbuilt jquery function pauses the EVENT that is underway.
  });
  
  //Move to next song on button click.
  $('#nextSong').click(function(){
        
   var next = $('li.playing').next();//The logical flow of this is same as the first segment of the Autoplay code (lines 3-15). It gets the next element of the track being played. 
   if (!next.length) next = $('ol li').first();//If it reaches the last elemnt, the list exhausts and the code crashes. So it reverts back to the first track.
   next.addClass('playing').siblings().removeClass('playing');//It adds the 'playing' class to the following element and removes it from all the other sibiling elements.
   audio.load($('a', next).attr('data-src')); //This loads the specified track and keeps it ready for playing.
   audio.play(); //This plays the track specified
   
  });
  
  $('#favouriteSong').click
});


/// Wait for the HTML to load - DOM ready
// before adding a click event to our button
$(addStartGameEvent);

// Ask jQuery to call the function
// readContactForm when the user clicks
// on something with the class start-btn
function addStartGameEvent(){
  $('#spela').click(jumboSpela);
  $('#changeMenu').click(changeSpelaToAvbryt);
  $('.start-btn').click(readContactForm);
  $(startGame);
  
}
function changeSpelaToAvbryt(){
  // since click functions run before the
  // browser follows a link we need to
  // delay changing the link (for a supershort while)
  if($('#changeMenu a').text()=='Avbryt'){
    // don't do this if the text is already avbryt
    return;
  }
  setTimeout(function(){
    $('#changeMenu a').text('Avbryt');
    $('#changeMenu a').attr('href','#start');
    //$('#changeMenu').click(gotoStartPage);
  },0);
}

function jumboSpela(){
  if($('#changeMenu a').text()=='Avbryt'){
    // don't do this if the text is already avbryt
    return;
  }
  setTimeout(function(){
    $('#changeMenu a').text('Avbryt');
    $('#changeMenu a').attr('href','#start');
  },0);
}


function changeAvbrytToSpela(){
  $('header nav a').click(function(){
    if($(this).text() == 'Skapa shopping lista'){ return; }
    setTimeout(function(){
      $('#changeMenu a').text('Skapa shopping lista');
      $('#changeMenu a').attr('href','#Create_new_shopping_list');
    },0);
  });
}
$(changeAvbrytToSpela);

function startGame(){

}
//This function read the ContactForm eith information about players and return the 2 players (2 objects with properties: name, number,type)
function readContactForm(){

  // Read values from the form input fields
  let player1 = new Player($('#player1_name').val(), $('input[name=player1_type]:checked').val(),'red',1, false);
  let player2 = new Player($('#player2_name').val(), $('input[name=player2_type]:checked').val(),'yellow',0, false);
  window.players = [player1,player2];
  
  // Check if the return of the checkPlayers is true and if so stay on the same page
  let r = checkPlayers(player1.name, player2.name, player1.type, player2.type);
  if(r.stayOnPage){ 
    return;
  }
  else {
    location.hash ='#spelar';
    gameInit();
   }
}

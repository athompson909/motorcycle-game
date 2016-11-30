var ground;
$().ready(function() {
  // initialize the ground
  guy = new Guy();

  ground = new Ground(guy);
  $('#ground').html(ground.innerContent);


});

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
          break;

        case 38: // up
          guy.jump();
          break;

        case 40: // down
          break;

        case 13: // enter
          ground.startMovingGround();
          break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});


function submit() {
  if($("#answer").val() == (num1 + num2)) {
    $("#addition-box").html("<h2>good job! you may continue!</h2><button id='continue' onclick='skipLava()'>Continue</button>");
  }
  else {
    $("#addition-box").html("<h2>Sorry, you were incorrect, game over!</h2>");
  }
}

function skipLava() {
  ground.skipLava();
}

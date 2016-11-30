var Guy = function() {

  this.verticalPos = 36;
  this.position = 200;

  this.stop = false;
}

Guy.prototype.jump = function() {
  if(this.verticalPos == 36) {
    var elem = document.getElementById("guy");
    var pos = 36;
    var id = setInterval(goUp, 1, this);
    function goUp(guy) {
      if (pos > 216) {
        clearInterval(id);
        startGoDown(guy);
      } else {
        guy.verticalPos++;
        pos++;
        elem.style.bottom = pos + 'px';
      }
    }
  }
}

function startGoDown(guy) {
  var elem = document.getElementById("guy");
  var pos = 180+36;
  var id = setInterval(goDown, 1, guy)
  function goDown(theGuy) {
    if (pos == 36) {
      clearInterval(id)
    }
    guy.verticalPos--;
    pos--;
    elem.style.bottom = pos + 'px';
  }
}

var num1, num2;

Guy.prototype.die = function() {
  $("#guy").append('<div id="explosion"><img src="http://rs651.pbsrc.com/albums/uu236/416o/explosion.gif~c200"></div>');
  $("#guy").css("transform", "rotate(20deg)");
  num1 = getRandomInt(0, 10);
  num2 = getRandomInt(0, 10);
  $("#addition-box").html("<h3>uh-oh, it looks like you've fallen into some hot lava</h3><p>solve this equation to get out of the lava </p><p>What is "+num1+" + "+num2+"?</p><p>your answer: <input id='answer' type='text'></input> <button onclick='submit()'>Submit</button></p>");

  this.stop = true;
}

Guy.prototype.revive = function() {
  $("#explosion").remove();
  $("#guy").css("transform", "rotate(0deg)");
  $("#addition-box").empty();
}

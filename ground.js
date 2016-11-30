var Ground = function(guy) {
  this.grounds = [];
  this.currentIndex = 0;
  this.currentType = 'SAFE';

  this.guy = guy;
  this.stop = false;
  this.pos = 0;
  this.totalWidth = 0;
  this.innerContent = this.generateGround();
  this.nextPiece = {
    htmlDiv: shortSafeChunk.htmlDiv,
    width: shortSafeChunk.width,
    type: 'SAFE'
  }
  this.lastDivType = '';
}

/*
  FIGURE OUT A WAY TO GET RID OF THE OLD DIVS SO AS TO NOT EXCEED THE REQUIRED WIDTH
*/

Ground.prototype.startMovingGround = function() {

  var elem = document.getElementById("ground");
  var id = setInterval(frame, 5, this);

  var count = 0;

  function frame(ground) {
    ground.pos--;
    count++;
    ground.guy.position++;

    if(ground.isOverLava(ground.guy.position-25)) {
      ground.guy.die();
      clearInterval(id);
    }

    elem.style.left = ground.pos + 'px';

    if(count == 150) {
      if(ground.totalWidth >= 19500) {
        clearInterval(id);
      }
      count = 0;
      ground.appendDiv();
      $('#ground').html(ground.innerContent);
    }
  }
}

Ground.prototype.appendDiv = function() {
  this.addToGrounds(this.nextPiece);
  this.totalWidth += this.nextPiece.width;
  this.innerContent += this.nextPiece.htmlDiv;
  this.setNextPiece();
}

Ground.prototype.isOverLava = function(pos) {
  // keeps track of the current grounds array over which the motorcycle is hovered

  if(this.guy.verticalPos == 36 && this.grounds[this.currentIndex].type == 'LAVA') {
    // console.log("destruction!!!");
    // console.log("index: "+this.currentIndex);
    // console.log("guy position: "+ground.guy.position);
    console.log(this.grounds);
    return true;
  }


  if (this.grounds[this.currentIndex].end <= pos) {
    this.currentIndex++;
    // console.log("index: "+this.currentIndex);
    // console.log("guy position: "+ground.guy.position);
    // console.log(this.grounds);
  }

  return false;
}

Ground.prototype.skipLava = function() {

  this.currentIndex++;
  var intervalIncrease = this.getRestOfLavaDistance();
  this.pos -= intervalIncrease;
  this.guy.position += intervalIncrease;

  this.guy.revive();
  this.startMovingGround();
}

Ground.prototype.getRestOfLavaDistance = function() {
  return this.grounds[this.currentIndex-1].end - this.guy.position;
}

Ground.prototype.generateGround = function() {
  var inner = longSafeChunk.htmlDiv;
  this.addToGrounds(longSafeChunk)
  this.totalWidth += longSafeChunk.width;
  for(var i = 0; i < 5; ++i) {
    // odd indexes are associated with safe chunks and evens are associated with lava
    var obj = chooseRandomDiv(i);
    this.addToGrounds(obj);
    inner += obj.htmlDiv;
    this.totalWidth += obj.width;
    this.lastDivType = obj.type;
    if(i == 5) {
      this.setNextPiece();
    }
  }
  return inner;
}

Ground.prototype.setNextPiece = function() {
  var obj = {};
  switch(this.nextPiece.type) {
    case 'SAFE':
      obj = chooseRandomDiv(2);
      break;
    case 'LAVA':
      obj = chooseRandomDiv(1);
  }
  this.nextPiece.htmlDiv = obj.htmlDiv;
  this.nextPiece.type = obj.type;
  this.nextPiece.width = obj.width;
}

Ground.prototype.addToGrounds = function(piece) {
  this.grounds.push({
    start: this.totalWidth,
    end: this.totalWidth + piece.width,
    type: piece.type
  });
  // console.log(this.grounds);
}

function chooseRandomDiv(i) {
  if(i % 2 == 0) {
    return chunksArr[getRandomInt(3,4)];
  }
  else {
    return chunksArr[getRandomInt(0,2)];
  }
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

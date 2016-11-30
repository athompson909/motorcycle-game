//these are now in an array
var longSafeChunk = { // type 0
  width: 500,
  htmlDiv: '<div class="long-safe-chunk"></div>',
  type: 'SAFE'
}

var shortSafeChunk = { // type 1
  width: 250,
  htmlDiv:'<div class="short-safe-chunk"></div>',
  
  type: 'SAFE'
}

var tinySafeChunk = { // type 2
  width: 175,
  htmlDiv: '<div class="tiny-safe-chunk"></div>',
  type: 'SAFE'
}

var longLavaChunk = { // type 3
  width: 200,
  htmlDiv: '<div class="long-lava-chunk"></div>',
  type: 'LAVA'
}

var shortLavaChunk = { // type 4
  width: 100,
  htmlDiv: '<div class="short-lava-chunk"></div>',
  type: 'LAVA'
}

var chunksArr = [
  { // index 0
    type: 'SAFE',
    width: 500,
    htmlDiv: '<div class="long-safe-chunk"></div>'
  },
  { // type 1
    type: 'SAFE',
    width: 250,
    htmlDiv:'<div class="short-safe-chunk"></div>'
  },
  { // type 2
    type: 'SAFE',
    width: 175,
    htmlDiv: '<div class="tiny-safe-chunk"></div>'
  },
  { // type 3
    type: 'LAVA',
    width: 200,
    htmlDiv: '<div class="long-lava-chunk"></div>'
  },
  { // type 4
    type: 'LAVA',
    width: 100,
    htmlDiv: '<div class="short-lava-chunk"></div>'
  }
]

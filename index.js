function theBeatlesPlay(musicians, instruments) {
  var temp = [];
  for(var i = 0; i ++; i < musicians.length){
    var member = musicians[i]
    var instrument = instruments[i]
    var combo = member + " plays " + instrument
    temp[i] = combo
  }
}


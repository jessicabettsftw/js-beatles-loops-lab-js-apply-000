function theBeatlesPlay(musicians, instruments) {
  var temp = [];
  for(var i = 0; i < musicians.length; i ++){
    var member = musicians[i];
    var instrument = instruments[i];
    var combo = member + " plays " + instrument;
    temp[i] = combo;
  }
  
  return temp;
}

function johnLennonFacts(facts){
  var counter = 0;
  
  while(counter < facts.length){
    var item = facts[counter];
    item = item + "!!!";
    facts[counter] = item;
    counter++;
  }
  return facts;
}
